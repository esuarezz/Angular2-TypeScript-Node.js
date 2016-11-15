import UserRepository = require("../repository/UserRepository");
import IUserBusiness = require("./interfaces/UserBusiness");
import IUserModel = require("../model/interfaces/UserModel");
import HeroModel = require("../model/UserModel");


class UserBusiness implements IUserBusiness {
    private userRepository: UserRepository;

    constructor () {
        this.userRepository = new UserRepository();
    }

    create (item: IUserModel, callback: (error: any, result: any) => void) {
        this.userRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this.userRepository.retrieve(callback);
    }

    update (_id: string, item: IUserModel, callback: (error: any, result: any) => void) {

        this.userRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this.userRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this.userRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: IUserModel) => void) {
        this.userRepository.findById(_id, callback);
    }

}


Object.seal(UserBusiness);
export = UserBusiness;