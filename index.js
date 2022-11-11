const express = require('express');
const path = require('path');
const app = express();
const logger = require('./middleware/logger')


// Initialize Logger
// app.use(logger)

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


// Serving Statis FIles
app.use(express.static(path.join(__dirname, 'public')));

// Members Api Routes
app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));