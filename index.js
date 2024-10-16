const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
//middlewire

app.use(express.json())


// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('ShoppyGlobe started.');
});

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB...');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB:', err);
        process.exit(1);
    });


// Start the server
const port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});