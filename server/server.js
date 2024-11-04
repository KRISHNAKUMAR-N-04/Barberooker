require('dotenv').config();
const express = require('express');
const connectDB = require('./config');
const authRoutes = require('./routes/auth');
const cors = require('cors');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
