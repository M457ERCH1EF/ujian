// create an Express REST API server that return JSON data i.e "Salam Malaysia Madani!!" when a user sends a GET request to the server's /api/ path

const express = require('express');
const app = express();

app.get('/api/', (req, res) => {
    res.json({ message: 'Salam Malaysia Madani' });
    }
);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }

);