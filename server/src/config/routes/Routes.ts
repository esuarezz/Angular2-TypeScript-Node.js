import express = require('express');
import path = require('path');

import UserRoutes = require('./UserRoutes');

var app = express();

class Routes {

    get routes() {
        app.use("/", new UserRoutes().routes);
        return app;
    }
}
export = Routes;