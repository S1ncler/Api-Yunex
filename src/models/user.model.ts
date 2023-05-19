import { Schema, model } from "mongoose";


const UserScheme = new Schema(
    {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        rol: {
            type: String,
            required: true,
            default: "user",
            enum: ["coord", "user"]
        },
        reports: {
            type: Array,
            required: false
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const UserModel = model("users", UserScheme);

export default UserModel;