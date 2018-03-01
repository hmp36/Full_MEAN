//*** Sample User.js in /server/models/
let mongoose = require("mongoose");
let ObjectId = mongoose.Schema.Types.ObjectId;

let User = mongoose.model("User", new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    confirm: { type: String },
    bicycles: [{ type: ObjectId, ref: "Bicycle" }]
}, { timestamps: true }));
//*** End sample User.js
