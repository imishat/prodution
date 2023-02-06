const mongoose = require('mongoose');
const mongoURI ="mongodb://localhost:27017/tournament";
const connectToMongo =()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("MongoDB connection Sucessfully established")
    })
}

module.exports = connectToMongo