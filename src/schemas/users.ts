import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    phone: String,
    tg_id: Number
});

const USERS = mongoose.model("users",schema);

export default USERS;