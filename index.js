//const express = require("express");//old way of importing express module
import express from "express";//modern way of importing express module Es6 module

import connectDB from "./config/database.js";//importing connectDB function from database.js file
import HANDLERS from './handlers/index.js';

const app = express();//creating an instance of express application (instance means creating an object of express class)
const port = process.env.PORT;//getting the port number from environment variable

connectDB();//calling the connectDB function to connect to the database

app.use(express.json());
app.use('/', HANDLERS);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
