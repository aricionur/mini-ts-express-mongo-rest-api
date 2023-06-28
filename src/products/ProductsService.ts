import { ProductDto } from "./dto/ProductDto";
import { ProductModel } from "./model/ProductModel";
import { IsSuccesss } from "./dto/isSuccess";

class ProducsService {
  private model: typeof ProductModel;

  constructor() {
    this.model = ProductModel;
  }

  async getProducts(
    args: ProductDto = {}
  ): Promise<ProductDto[] | ProductDto | null> {
    if (args._id) return this.model.findOne(args);

    return this.model.find(args);
  }

  saveProduct(product: ProductDto): Promise<ProductDto | null> {
    if (product._id) {
      return this.model.findOneAndUpdate({ _id: product._id }, product, {
        new: true,
      });
    }

    return this.model.create(product);
  }

  async deleteProduct(_id: string): Promise<IsSuccesss> {
    await this.model.deleteOne({ _id });

    return { isSuccess: true };
  }
}

export default ProducsService;
