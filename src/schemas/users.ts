import mongoose, { ObjectId } from "mongoose";

export interface IUser{
    _id: ObjectId,
    name: String,
    phone: String,
    tg_id: Number,
    lang: String
}

const schema = new mongoose.Schema<IUser>({
    name: String,
    phone: String,
    tg_id: Number,
    lang: String
});

const USERS = mongoose.model("users",schema);

export default USERS;