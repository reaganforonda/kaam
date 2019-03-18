const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotEnv = require('dotenv');
const massive = require('massive');
const app = express();
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

app.listen(SERVER_PORT, ()=>{
    console.log(`Creepin on Port: ${SERVER_PORT}`);
});