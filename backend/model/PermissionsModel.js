const { model } = require("mongoose");

const {PermissionsSchema} = require('../schemas/PermissionSchema');

const PermissionsModel = new model("permission", PermissionsSchema );

module.exports = { PermissionsModel };
