var express = require('express');
var path = require('path');
var cors = require('cors');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
 
var people = require('./routes/people');
var programs = require('./routes/programs');
var countries = require('./routes/country');
var cities = require('./routes/city');
var archives = require('./routes/archives');
var aggrements = require('./routes/aggrements');
var versions = require('./routes/versions');
var subjects = require('./routes/subjects');
var sedder = require('./routes/sedders');
var types = require('./routes/types');
var statuses = require('./routes/statuses');
var providers = require('./routes/providersBooks');
var books = require('./routes/books');
var tutors = require('./routes/tutors');
var formats = require('./routes/formats');
var aplications = require('./routes/applications');
var bookAgreement = require('./routes/bookAgreements');

var app = express();
app.use(cors());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false,limit: '50mb' }));
app.use(cookieParser())
 


app.use(express.static('public'));

app.use( '/api/people', people);
app.use( '/api/programs', programs);
app.use( '/api/countries', countries);
app.use( '/api/cities', cities);
app.use( '/api/archives', archives);
app.use( '/api/versions', versions);
app.use( '/api/aggrements', aggrements);
app.use('/api/subjects', subjects);

app.use( '/api/sedder', sedder);
app.use( '/api/statuses', statuses);
app.use( '/api/types', types);
app.use( '/api/providersBooks', providers);
app.use( '/api/books', books);
app.use( '/api/tutors', tutors);
app.use( '/api/formats', formats);
app.use( '/api/aplications', aplications);
app.use( '/api/bookAgreements', bookAgreement);
 
module.exports = app;
