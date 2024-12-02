const { model } = require("mongoose");

const {RolesSchema} = require('../schemas/RoleSchema');

const RolesModel = new model("role", RolesSchema );

module.exports = { RolesModel };
