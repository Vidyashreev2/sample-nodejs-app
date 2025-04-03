const express = require('express');

// Initialize the Express app
const app = express();
const PORT = process.env.PORT || 2000;

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('Sample nod app');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
