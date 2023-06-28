import { Router, Request, Response } from "express";

import UsersService from "../users/usersService";

export default (router: Router) => {
  const userService = new UsersService();

  router.get("/users", async (req: Request, res: Response) => {
    const users = await userService.getUsers();

    res.json(users);
  });

  router.get("/users/:_id", async (req: Request, res: Response) => {
    const user = await userService.getUsers(req.params);

    res.json(user);
  });

  router.post("/users", async (req: Request, res: Response) => {
    const user = await userService.saveUser(req.body);

    res.json(user);
  });

  router.delete("/users/:_id", async (req: Request, res: Response) => {
    const result = await userService.deleteUser(req.params._id);

    res.json(result);
  });
};
