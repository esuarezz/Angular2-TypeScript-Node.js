import IUserModel = require('./interfaces/UserModel');

class UserModel {

    private iUserModel: IUserModel;

    constructor(heroModel: IUserModel) {
        this.iUserModel = heroModel;
    }
    get name (): string {
        return this.iUserModel.email;
    }
    get amountPeopleSaved (): number {
        return this.iUserModel.phone;
    }
    
}
Object.seal(UserModel);
export =  UserModel;