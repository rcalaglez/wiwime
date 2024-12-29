import { Router } from "express";
import { AuthController } from "./controller";
import { AuthRepositoryImpl } from "../../infrastructure/repositories/auth.repository.impl";
import { AuthDataSourceImpl } from "../../infrastructure/datasources/auth.datasource.impl";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class AuthRoutes {
  /**
   * Evitamos crear instancias de la clase
   */
  static get routes(): Router {
    const router = Router();

    const database = new AuthDataSourceImpl();
    const repository = new AuthRepositoryImpl(database);
    const controller = new AuthController(repository);

    /**
     * Definimos todas las rutas principales
     */

    // router.post("/login", controller.loginUser);
    router.post("/register", controller.registerUser);
    router.post("/login", controller.loginUser);

    router.get("/", [AuthMiddleware.validateJWT], controller.getUsers);

    return router;
  }
}
