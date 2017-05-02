import mongoose from 'mongoose';
import express from 'express';
import path from 'path';

const app = express();


//Set up default mongoose connection
const mongoDB = 'mongodb://localhost/Trello-clone';
mongoose.connect(mongoDB);

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/index.html'));
});

app.listen(5000, () => console.log('Running on port 5000....'));

export default app;
