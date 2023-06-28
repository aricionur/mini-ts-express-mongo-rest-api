import { Router, Request, Response } from "express";
import ProducsService from "../products/ProductsService";

export default (router: Router) => {
  const productService = new ProducsService();

  router.get("/products", async (req: Request, res: Response) => {
    const products = await productService.getProducts();

    res.json(products);
  });

  router.get("/products/:_id", async (req: Request, res: Response) => {
    const product = await productService.getProducts(req.params);

    res.json(product);
  });

  router.post("/products", async (req: Request, res: Response) => {
    const products = await productService.saveProduct(req.body);

    res.json(products);
  });

  router.delete("/products/:_id", async (req: Request, res: Response) => {
    const result = await productService.deleteProduct(req.params._id);

    res.json(result);
  });
};
