const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const dummyRoute = require('./routes/dummy');

dotenv.config();

mongoose.connect(
    process.env.DB_CONNECT, 
    { useNewUrlParser: true },
    () => console.log('Connected to db'));

//middleware
app.use(express.json());
app.use('/accounts', authRoute);
app.use('/dummy', dummyRoute);


app.listen(3000, () => console.log('Server up on port 3000'));