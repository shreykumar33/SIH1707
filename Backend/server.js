const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const { PORT } = require("./config/appConfig");
const attendanceRoutes = require("./routes/attendanceRoutes");

const app = express();

// Enable request logging
app.use(morgan('combined'));

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api", attendanceRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
