'use strict';


/**
 * Liste aller **role** erhalten.
 *
 * limit Integer Maximale Länge der Liste festlegen (optional)
 * returns List
 **/
exports.getRole = function(limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "role_name" : "admin",
  "role_id" : 21,
  "description" : "has all rights"
}, {
  "role_name" : "admin",
  "role_id" : 21,
  "description" : "has all rights"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * **user** mit **user_id** erhalten.
 *
 * role_id Integer 
 * returns role
 **/
exports.getRoleById = function(role_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "role_name" : "admin",
  "role_id" : 21,
  "description" : "has all rights"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Einen neuen **role** anlegen.
 *
 * body Role 
 * no response value expected for this operation
 **/
exports.setRole = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

