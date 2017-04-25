import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
//Set up default mongoose connection
const mongoDB = 'mongodb://localhost/Trello-clone';
mongoose.connect(mongoDB);

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', function (req, res) {
  res.send('You are connected to Trello clone');
});

app.listen(5000);
console.log('Running on port 5000....')
