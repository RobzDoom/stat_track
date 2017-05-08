// const fs        = require('fs');
// const path      = require('path');
// const Sequelize = require('sequelize');
// const config    = require('../config/index');

// let env  = process.env.NODE_ENV || 'development';
// let db   = {};

// const sequelize = new Sequelize(config.db.name, config.db.user, config.db.password);

// sequelize.sync()

// fs
//   .readdirSync(__dirname)
//   .filter((file) => {
//     return (file.indexOf(".") !== 0) && (file !== "index.js");
//   })
//   .forEach((file) => {
//     let model = sequelize.import(path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach((modelName) => {
//   if ("associate" in db[modelName]) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;