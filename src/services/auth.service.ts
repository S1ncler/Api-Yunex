import { user } from "../interfaces/user.interface";
import UserModel from "../models/user.model";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken, verifyToken } from "../utils/jwt.handle";

const registerNewUser = async (authUser: user) => {
  const checkIs = await UserModel.findOne({ email: authUser.email });
  if (checkIs) return "ALREADY_USER";
  const passHash = await encrypt(authUser.password);
  authUser.password = passHash;
  const responseInsert = await UserModel.create(authUser);
  return responseInsert ? "Usuario creado correctamente" : responseInsert;
};

const loginUser = async (email: string, pass: string) => {
  const user = await UserModel.findOne({ email });
  if (!user) return "INCORRECT_USER_DATA";
  const passHash = user.password;
  const isVerified = await verified(pass, passHash);
  if (!isVerified) return "INCORRECT_USER_DATA";
  const token = await generateToken(user.email);
  const data = {
    token,
    usuario: user,
  };
  return data;
};

const verify_log = async (token: string) => {
    const verify = await verifyToken(token);
    return verify; 
}

export { registerNewUser, loginUser, verify_log };
