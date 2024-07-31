const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/weather/:city/:country', async (req, res) => {
    const { city, country } = req.params;
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        res.status(error.response ? error.response.status : 500).json({ error: 'Error fetching weather data' });
    }
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Weather app listening at http://0.0.0.0:3000');
})