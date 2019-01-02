require('dotenv').config();
// Required modules
const   express = require('express'),
        mongoose = require('mongoose'),
        bodyParser = require('body-parser'),
        methodOverride = require('method-override');

// Initializatons
const   app = express(),
        server = require('http').Server(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes & Variables
const   port = process.env.PORT || 3000,
        mongoDbUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017/loreal_db';

const   apiSessionRoutes = require('./app/routes/api.session'),
        sessionRoutes = require('./app/routes/session');

app.set('view engine', 'ejs');

app.use(methodOverride("_method"));

app.use(express.static(__dirname + '/public'));
app.use('/api/v1', apiSessionRoutes);
app.use('/', sessionRoutes);

mongoose.connect(mongoDbUrl, { useNewUrlParser: true });

server.listen(port, function() {
    console.log('L\'Oreal app is listening on port 3000...');
});