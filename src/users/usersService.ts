import { UserModel } from "./model/userModel";
import { UserDto } from "./dto/userDto";
import { IsSuccess } from "./dto/successDto";
import { Types } from "mongoose";

class UsersService {
  private readonly model: typeof UserModel;

  constructor() {
    this.model = UserModel;
  }

  async getUsers(args: UserDto = {}): Promise<UserDto[] | UserDto | null> {
    if (args._id) {
      const _id = new Types.ObjectId(args._id);
      return this.model.findOne({ _id });
    }

    return this.model.find(args);
  }

  saveUser(user: UserDto): Promise<UserDto | null> {
    if (user._id) {
      return this.model.findOneAndUpdate({ _id: user._id }, user, {
        new: true,
      });
    }

    return this.model.create(user);
  }

  async deleteUser(_id: string | Types.ObjectId): Promise<IsSuccess> {
    await this.model.findByIdAndDelete({ _id });

    return { isSuccess: true };
  }
}

export default UsersService;
