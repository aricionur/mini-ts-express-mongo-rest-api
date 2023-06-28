import { Express, Router } from "express";

import usersRoutes from "./users";

const route = Router();

export const registerRoutes = (app: Express) => {
  usersRoutes(route);

  app.use("/", route);
};
