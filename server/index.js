const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotEnv = require('dotenv');
const massive = require('massive');
const app = express();
const authController = require('./controllers/authController');
const propertyController = require('./controllers/propertyController');
dotEnv.config();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/../build`));

const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env;

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
});


// Endpoints

// User Endpoints
app.post('/api/auth/register', authController.register);

// Property Endpoints
app.post('/api/property', propertyController.addProperty);
app.get('/pai/property/:propertyID', propertyController.getProperty);

app.listen(SERVER_PORT, ()=>{
    console.log(`Creepin on Port: ${SERVER_PORT}`);
});