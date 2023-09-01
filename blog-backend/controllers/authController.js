const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY;

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

exports.userProfileController = (req, res)=>{
    const prevToken = req.cookies['token'];
   
   //  console.log('token--' + token['token'])
   // res.status(200).cookie('token', prevToken, { expires: new Date(0)}).json({"reqStatus":false});
    jwt.verify(prevToken, secretKey, {}, (err, token)=>{
     // console.log('err' + err);
     // console.log('token ' + token);
     const {email, username}  =token;
         console.log('email ' + email);
         console.log('username ' + username);
 
     User.findOne({email}).then((dbResponse)=>{
       if(dbResponse!=null){
         if (err) {
           res.status(200).json({"reqStatus":false});
         }
         else{
           res.status(200).cookie('token', prevToken).json({"reqStatus":true, "username": username});
         }
       }
       else{
         res.status(200).json({"reqStatus":false});
       }
     })
 
     
    })
 }

 exports.logoutController = async (req, res) => {
    const prevToken = req.cookies['token'];
  
    res.status(200).cookie('token', prevToken, { expires: new Date(0)}).json({"reqStatus":true});
  }
