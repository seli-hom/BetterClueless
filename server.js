// require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// console.log(process.env.WEATHER_KEY); 

app.get('/api/excuse', async (req, res) => {
  const { type, location } = req.query;
  
  // 1. Get real evidence
  const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.WEATHER_KEY}`);
  const traffic = await axios.get(`https://maps.googleapis.com/maps/api/traffic/json?location=${location}&key=${process.env.MAPS_KEY}`);

  // 2. Generate AI excuse
  const prompt = `Create a believable ${type} excuse using this data:
  Weather: ${weather.data.weather[0].description}
  Traffic: ${traffic.data.snapshot}`;
  
  const geminiRes = await axios.post('https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key='+process.env.GEMINI_KEY, {
    contents: [{ parts: [{ text: prompt }] }]
  });

  res.json({
    excuse: geminiRes.data.candidates[0].content.parts[0].text,
    weather: weather.data,
    traffic: traffic.data
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Running on GoDaddy!');
});