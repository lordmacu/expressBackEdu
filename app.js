var express = require('express');
var path = require('path');
var cors = require('cors');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
 
var people = require('./routes/people');
var programs = require('./routes/programs');
var countries = require('./routes/country');
var archives = require('./routes/archives');
var aggrements = require('./routes/aggrements');
var versions = require('./routes/versions');
var subjects = require('./routes/subjects');
var sedder = require('./routes/sedders');
var types = require('./routes/types');
var statuses = require('./routes/statuses');
var providers = require('./routes/providers');
var books = require('./routes/books');

var app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use(express.static('public'));

app.use( '/api/people', people);
app.use( '/api/programs', programs);
app.use( '/api/countries', countries);
app.use( '/api/archives', archives);
app.use( '/api/versions', versions);
app.use( '/api/aggrements', aggrements);
app.use('/api/subjects', subjects);

app.use( '/api/sedder', sedder);
app.use( '/api/statuses', statuses);
app.use( '/api/types', types);
app.use( '/api/providers', providers);
app.use( '/api/books', books);
 
module.exports = app;
