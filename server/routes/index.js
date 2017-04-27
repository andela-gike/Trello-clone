import logger from 'morgan';
import bodyParser from 'body-parser';
import userRouter from './userRoutes';
import cardsRouter from './cardsRoutes';
import boardsRouter from './boardsRoutes';
import app from '../../server';

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/users', userRouter);
app.use('/api/cards', cardsRouter);
app.use('/api/boards', boardsRouter);
