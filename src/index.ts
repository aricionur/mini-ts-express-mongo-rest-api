import bodyParser from "body-parser";
import express, { Express } from "express";

import { registerRoutes } from "./route";
import { connectMongoDB } from "./util/mongodb/connect";

const app: Express = express();
const port = 3000;

app.use(bodyParser.json());

registerRoutes(app);

app.listen(port, () => {
  console.log(`Server started at:${port}`);
});

connectMongoDB();
