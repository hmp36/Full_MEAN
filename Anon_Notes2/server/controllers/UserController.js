//*** Sample UserController.js in /server/controllers/
let User = require("mongoose").model("User");

module.exports = {
    register: function (req, res) {
        //Logic for creating a user and saving them in the database
    },
    login: function (req, res) {
        //Logic for logging in
    },
    cookie: function (req, res) {
        //Logic for creating a cookie
    }

}
//*** End sample User.Controller.js