import UserModel from "../models/user.model"
import { user } from "../interfaces/user.interface"

const get_users_service = async () => {
    const response = await UserModel.find();
    return response ? response : "NOT_DATA";
}

const get_user_service = async (email: string) => {
    const response = await UserModel.findOne({email: email});
    return response ? response : "USER_NOT_FOUND";
}

const post_user_service = async (user: user) => {
    if (await UserModel.findOne({email: user.email})) return "ALREADY_USER";
    const response = await UserModel.create(user);
    return response ? "USER_CREATED_OK" : "ERROR_CREATING_USER";
}

const put_user_service = async (email: string, user: user) => {
    const response = await UserModel.findOneAndUpdate({email: email}, user);
    return response ? "USER_CREATED_OK" : "ERROR_CREATING_USER";
}

const delete_user_service = async (email:string) => {
    const reponse = await UserModel.findOneAndRemove({email: email});
    return reponse ? "USER_DELETED_OK" : "ERROR_DELETING_USER";
}

export {
    get_users_service,
    get_user_service,
    post_user_service,
    put_user_service,
    delete_user_service
}