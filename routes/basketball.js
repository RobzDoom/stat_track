const express   = require('express');
const nba       = require('nba.js').default;

const router    = express.Router();

router.get('/games/:day', (req,res) => {
  nba.data.scoreboard({date: req.params.day}).then(data => {
    res.status(200).json({"Success": true, "games": data})
  }).catch(err => {
    res.status(404).json({"Success": false, "Message": "404 Not Found!"})
  })
});

router.get('/standings', (req,res) => {
  nba.data.conferenceStandings().then(data => {
    res.status(200).json({"Success": true, "games": data})
  }).catch(err => {
    res.status(404).json({"Success": false, "Message": "404 Not Found!"})
  })
});

module.exports = router;