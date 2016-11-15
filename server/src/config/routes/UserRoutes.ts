
import express = require("express");
import UserController = require("./../../controllers/UserController");

var router = express.Router();
class UserRoutes {
    private userController: UserController;

    constructor () {
        this.userController = new UserController();
    }
    get routes () {
        var controller = this.userController;

        router.get("/users", controller.retrieve);
        router.post("/users", controller.create);
        router.put("/users/:_id", controller.update);
        router.get("/users/:_id", controller.findById);
        router.delete("/users/:_id", controller.delete);

        return router;
    }
}

Object.seal(UserRoutes);
export = UserRoutes;