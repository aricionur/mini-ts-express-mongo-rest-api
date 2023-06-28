import { Express, Router } from "express";

import usersRoutes from "./users";
import productsRoutes from "./products";

const router = Router();

export const registerRoutes = (app: Express) => {
  usersRoutes(router);
  productsRoutes(router);

  app.use("/", router);
};
