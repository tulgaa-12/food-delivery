import { Router } from "express";
import { Checkemail, Hello, Signup } from "../controller/user/signup";
import { Login } from "../controller/user/login";
import { checkOtp, SendOtp, updatePassword } from "../controller/user/forget";
import { verify } from "../controller/user/verify";

export const UserRouter = Router();

UserRouter.get("/", Hello);
UserRouter.post("/signup", Signup);
UserRouter.post("/check-email", Checkemail);
UserRouter.post("/login", Login);
UserRouter.post("/email", SendOtp);
UserRouter.post("/checkOtp", checkOtp);
UserRouter.post("/verify", verify);
UserRouter.put("/updatePassword", updatePassword);
