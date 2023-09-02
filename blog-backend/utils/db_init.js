const mongoose = require('mongoose');

const mongoDBConnection = async () => {
    try {
        
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connected to MongoDB Database' + conn.connection.host);
        return conn;

    } catch (error) {
        console.log(`error in MongoDB ${error}`);
    }
};


module.exports = {mongoDBConnection};
