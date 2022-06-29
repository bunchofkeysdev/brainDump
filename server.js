const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
let connectionString = 'mongodb+srv://BrainDumpMaster:rukkywilliams1@cluster0.2qmai2o.mongodb.net/?retryWrites=true&w=majority';


MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('brain-dump')
    })


app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.post('/dump', (req, res) => {
    console.log(req.body)
})

app.listen(3000, function () {
    console.log('listenting on 3000')
})