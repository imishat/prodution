const mongoose = require('mongoose');
 const mongoURI = "mongodb://localhost:27017/tournament";
// const mongoURI = "mongodb+srv://voidash:codingjokers@cluster0.uf0mp.mongodb.net/tournament";
const connectToMongo = () => {
    mongoose.connect(mongoURI).then(() => {
        console.log("MongoDB connection Sucessfully established")
    });
}


module.exports = connectToMongo