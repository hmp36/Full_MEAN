//*** Routes.js
let path = require("path");
let mongoose = require("mongoose");
//Sample UserController
let UserController = require("../controllers/UserController.js");
//Put the rest of your controllers here

module.exports = function (app) {
    //Create your API routes here. Here are the sample UserController routes
    app.post("/server/users/login", UserController.login);
    app.post("/server/users/register", UserController.register);

    //Catch all route to send the user to the Angular app. Change "public" to your Angular app folder
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./client/AN2app/dist/index.html"))
    });
}
//*** End routes.js
