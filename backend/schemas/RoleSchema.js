const {Schema} = require("mongoose");

const RolesSchema = new Schema({
    user_id : {
        type: Number,
        unique: true,
        required: true
    },
    name: { type: String, required: true },
    Email: { type: String, required: true },
    role: { type: String, required: true },
});

module.exports = { RolesSchema };