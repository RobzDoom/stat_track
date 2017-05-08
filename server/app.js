// Import Modules
// Define nba to access stats and data API endpoints
const express    = require('express');
const nba        = require('nba.js').default;
const morgan     = require('morgan');
const cors       = require('cors');
const path       = require('path');

// Define app to initialize express
const app        = express();
const routes     = require('./routes');
const PORT       = 8000;

// Logs HTTP request and status codes
app.use(morgan('dev'));
app.use(cors({origin: "http://localhost:8000"}));

// Initialize CRUD API for user's favorite team
// Catch all route to render index file for all react routes
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use('/api', routes);
app.use('*', (req,res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public','index.html'));
});

// Returns a status code and handles our errors
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    code: err.status,
    message: err.message
  });
  console.log(err);
  next()
})

// Will use PORT defined above for the server to listen on
app.listen(PORT, (req, res) => {
  console.log("Listening on Port:", PORT);
})
