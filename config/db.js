const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connect = await mongoose.connect('mongodb+srv://alustephenadedayo:Stephen5259@cluster0.da22qjm.mongodb.net/')
        console.log(`MongoDB: ${connect.connection.host}`);
    
    } catch (error) {
        console.log(`error: ${error.message}`);
        
    }
}

module.exports = connectDB   