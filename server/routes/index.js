import logger from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './userRoutes';
import cardsRouter from './cardsRoutes';
import boardsRouter from './boardsRoutes';
import mongoose from 'mongoose';

// Set up default mongoose connection
mongoose.connect('mongodb://localhost/Trello-clone');

// Get the default connection
const db = mongoose.connection;

db.on('connected', () => {
  console.log('MongoDB is connected ');
});


// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/users', userRouter);
app.use('/api/cards', cardsRouter);
app.use('/api/boards', boardsRouter);

export default app;
