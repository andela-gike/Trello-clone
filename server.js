// import express from 'express';
import app from './server/routes/index';

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(5000, () => console.log('Running on port 5000....'));

