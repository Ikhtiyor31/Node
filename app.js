import express from 'express'

const app = express();


app.get('/', (req, res )=> {
    res.send("Hello bobonazarbekjon");
});

const port = process.env.port || 3000;
app.listen(port, function() {
    console.log("server is listening")
})