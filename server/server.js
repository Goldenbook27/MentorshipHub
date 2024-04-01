const express = require('express');
const connectDb = require('./config/connectDb');
require('dotenv').config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

connectDb();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
