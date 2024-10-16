const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/mern");
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Connection Failed", error);
        process.exit(1);
    }
};

module.exports = connectDb;