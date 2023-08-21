import express from 'express';
import config from './config/config.js';
import usersRouter from './routes/user.router.js';

const app = express();
const PORT = config.port;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//ROUTES
app.use('/api/users', usersRouter);

app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`)
});