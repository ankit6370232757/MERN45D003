const mongoose = require("mongoose");

const DBconnect = async() => {
    try {
        const connect = await mongoose.connect(process.env.mongo_url);
        console.log(`Database is connected host :- ${connect.connection.host}`);

    } catch (err) {
        console.log(err);

    }
};

module.exports = DBconnect;