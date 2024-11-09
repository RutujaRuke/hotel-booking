const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const hotelRoutes = require('./Routes/hotelRoutes');
const connectDB = require('./Config/db');


// Load environment variables
dotenv.config();

// // Connect to the database
// connectDB();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/hotels', hotelRoutes);


// Middleware for parsing JSON
app.use(express.json());



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
