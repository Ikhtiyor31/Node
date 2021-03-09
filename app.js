import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import MongoDB from './utils/mongodb.js'
import callAllRouters from './routers/allRouters.js';
const app = express();


const mongo = MongoDB();

app.use( bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', callAllRouters);

const port = process.env.port || 3000;
app.listen(port, function() {
   
    console.log("server is listening")
})