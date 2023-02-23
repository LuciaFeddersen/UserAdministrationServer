'use strict';

var utils = require('../utils/writer.js');
var Role = require('../service/RoleService');

module.exports.getRole = function getRole (req, res, next, limit) {
  Role.getRole(limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRoleById = function getRoleById (req, res, next, role_id) {
  Role.getRoleById(role_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setRole = function setRole (req, res, next, body) {
  Role.setRole(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
