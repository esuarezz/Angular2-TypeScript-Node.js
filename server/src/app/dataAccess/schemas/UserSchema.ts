import DataAccess = require('../DataAccess');
import IHeroModel = require("../../model/interfaces/UserModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            email : {
                type: String,
                required: true
            },
            phone: {
                type: Number,
                required: true
            }
        });
        return schema;
    }
}
var schema = mongooseConnection.model<IHeroModel>("Users", UserSchema.schema);
export = schema;