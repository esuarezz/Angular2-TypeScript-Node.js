import mongoose = require("mongoose");

interface UserModel extends mongoose.Document {
    email: string;
    phone: number;
}

export = UserModel;