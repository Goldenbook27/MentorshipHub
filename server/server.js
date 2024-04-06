const express = require('express');
const connectDb = require('./config/connectDb');
const Routes = require('./routes');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(morgan('combined'))
const PORT = process.env.PORT || 5000;

connectDb();

Routes(app)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});