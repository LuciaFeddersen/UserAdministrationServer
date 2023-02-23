'use strict';


/**
 * Einen neuen **user** anlegen.
 *
 * body User 
 * no response value expected for this operation
 **/
exports.addUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * **user** mit **user_id** löschen.
 *
 * user_id Integer 
 * no response value expected for this operation
 **/
exports.deleteUser = function(user_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Liste aller **user** erhalten.
 *
 * limit Integer Maximale Länge der Liste festlegen (optional)
 * returns List
 **/
exports.getUser = function(limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "passwort" : "****",
  "role" : {
    "role_name" : "admin",
    "role_id" : 21,
    "description" : "has all rights"
  },
  "user_id" : 1274,
  "e-mail" : "firstUser@com",
  "username" : "firstUser"
}, {
  "passwort" : "****",
  "role" : {
    "role_name" : "admin",
    "role_id" : 21,
    "description" : "has all rights"
  },
  "user_id" : 1274,
  "e-mail" : "firstUser@com",
  "username" : "firstUser"
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
 * user_id Integer 
 * returns user
 **/
exports.getUserById = function(user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "passwort" : "****",
  "role" : {
    "role_name" : "admin",
    "role_id" : 21,
    "description" : "has all rights"
  },
  "user_id" : 1274,
  "e-mail" : "firstUser@com",
  "username" : "firstUser"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * **user** mit **user_id** ändern.
 *
 * body User 
 * user_id Integer 
 * returns user
 **/
exports.updateUserById = function(body,user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "passwort" : "****",
  "role" : {
    "role_name" : "admin",
    "role_id" : 21,
    "description" : "has all rights"
  },
  "user_id" : 1274,
  "e-mail" : "firstUser@com",
  "username" : "firstUser"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

