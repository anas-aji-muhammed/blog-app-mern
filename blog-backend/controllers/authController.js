const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY;

///API controller for signup
exports.registerController = async (req, res) => {
    const {email, username, password}  =req.body;
    const userDoc = await User.create({email,username, password}).then((dbResponse)=>{
      jwt.sign({email, id: dbResponse._id, username: dbResponse.username},secretKey, (err, token)=>{
        if (err) throw err;
        res.status(200).cookie('token', token).json({token, "reqStatus":true});
  
      });
      // res.json(dbResponse)
    }).catch((error) => {
      console.error('An error occurred while creating the document:', error);
      res.status(400).json(error)
    });
    
  }

  ///API controller for login
exports.logInController =  async (req, res)=>{
    const {email, password}  =req.body;
    const userDoc = await User.findOne({email}).then((dbResponse)=>{
      console.log(dbResponse);
      if(dbResponse!=null){
         const result =  bcrypt.compareSync(password, dbResponse.password);
         if(result===true){ 
          ///Login Success
          jwt.sign({email, id: dbResponse._id, username: dbResponse.username},secretKey, (err, token)=>{
            if (err) throw err;
            res.status(200).cookie('token', token).json({token, "reqStatus":true});
  
          } )
         }
         else{
          ///Pass word error case
          console.log("result!==true")
          res.status(404).json({"message": "Password incorrect", "status": false});
  
         }
      }
      else{
        ///UserNot found
        res.status(404).json({"message": "User Not Found", "status": false});
      }
    })
  
  }

///API controller for getting user info
exports.userProfileController = (req, res)=>{
    const prevToken = req.cookies['token'];
    getUserDetailsFromToken(prevToken).then((response)=>{
      if(response["valid"] === true){
        res.status(200).cookie('token', prevToken).json({"reqStatus":true, "username": response.user});
      }
      else{
        res.status(200).json({"reqStatus":false});
      }
    });
   
    
 }

 ///Logout and clear cookie
 exports.logoutController = async (req, res) => {
    const prevToken = req.cookies['token'];
  
    res.status(200).cookie('token', prevToken, { expires: new Date(0)}).json({"reqStatus":true});
  }

  /// For verifying jwt and getting the user details
  async function getUserDetailsFromToken(token)  {
    try{
      var decodedToken = jwt.verify(token, secretKey)
      const {email, username, id}  = decodedToken;
      console.log('email ' + email);
      console.log('username ' + username);
      console.log('id ' + id);
      try {
        const dbResponse = await User.findOne({ email });
        
        if (dbResponse !== null) {
          return {
            valid: true,
            dbResponse: dbResponse,
            id: dbResponse._id, 
            user: dbResponse.username
          };
        } else {
          return {
            valid: false
          };
        }
      } catch (err) {
        console.error("Error:", err);
        return {
          valid: false
        };
      }

    }
    catch(err){
      return {
        valid: false
      };
    }
          
};
exports.getUserDetailsFromToken = getUserDetailsFromToken;
