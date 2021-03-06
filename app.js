import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import logger from 'morgan'
import fileUpload from 'express-fileupload';
import MongoDB from './utils/mongodb.js'
import callAllRouters from './routers/allRouters.js';
const app = express();


const mongo = MongoDB();

app.use( bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));
app.use(logger('dev'));
app.use('/', callAllRouters);
app.get('/', (req, res) => {
    res.json("working");
})
const port = process.env.port || 3000;
app.listen(port, function() {
   
    console.log("server is listening")
})