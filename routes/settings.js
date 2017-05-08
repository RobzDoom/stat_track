const express           = require('express');
const model             = require('../models');
const config            = require('../config/index');

const router      = express.Router();
const Setting     = model.settings;

const Sequelize   = require('sequelize');
const sequelize   = new Sequelize(config.db.name, config.db.user, config.db.password);

router.get('/', (req,res) => {
  res.status(200).send("Hello this a me, Mario");
})

router.get('/user/:user_id', (req,res) => {
  Setting.findAll({
    where: {
      user_id: req.params.user_id
    }
  }).then((data) => {
    res.status(200).json({"Success": true, "favoriteTeam": data})
  }).catch((err) => {
    res.status(404).json({"Success": false, "Message": "404 Not Found!"})
  })
})


module.exports = router;