import { Router } from "express";
import UserController from "./controllers/UserController";
const routes = Router();

routes.get("/users", UserController.listUsers);
routes.get("/generate-users", UserController.generateUsers);
routes.get("/delete-users", UserController.deleteUsers);

export default routes;
