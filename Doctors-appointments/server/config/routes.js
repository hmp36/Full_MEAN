const User = require("../controllers/userController");
const appointment = require("../controllers/appointmentsController");
const path = require("path");

module.exports = (app) => {
    // User
    app.post("/user/create", User.create);
    app.post("/user/login", User.login);
    app.get("/user", User.session);
    app.get("/users", User.show);
    app.delete("/user/logout", User.logout);

    // appointments
    app.post("/appointment/add", appointment.add);
    app.get("/appointment/:id", appointment.findOne);
    app.get('/api/appointments', appointments.getAll);
    // app.get("/appointment/answer/:id", Question.findOneWithAnswers);
    app.post('/api/appointments', appointments.add)
    app.delete('/api/appointments/:id', appointments.delete);

    // talk to the front end
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./client/dist/index.html"));
    })
}