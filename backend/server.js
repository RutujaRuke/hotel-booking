const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Config/db');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();
const port = process.env.PORT || 5000;

// Middleware for parsing JSON
app.use(express.json());



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
