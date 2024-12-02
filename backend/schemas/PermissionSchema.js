const {Schema} = require("mongoose");

const PermissionsSchema = new Schema({
    user_id : {
        type: Number,
        unique: true,
        required: true
    },
    permission_name : {
        type: String,
        required: true,
    },
    status : {
        type: String,
        required: true,
    },
});

module.exports = { PermissionsSchema };