const settings      = require('./settings.js');
const basketball    = require('./basketball.js');
  

const express       = require('express');
const router        = express.Router();

router.use('/settings', settings);
router.use('/nba', basketball);

module.exports = router;