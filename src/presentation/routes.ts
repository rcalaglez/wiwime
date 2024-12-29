import { Router } from "express";
import { AuthRoutes } from "./auth/routes";

export class AppRoutes {
  /**
   * Evitamos crear instancias de la clase
   */
  static get routes(): Router {
    const router = Router();

    /**
     * Definimos todas las rutas principales
     */

    router.use("/api/auth", AuthRoutes.routes);

    return router;
  }
}
