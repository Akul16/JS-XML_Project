import express from 'express';
import fetch from 'node-fetch';
import 'dotenv/config';
const PORT = 3000

const app = express()

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/restaurants', async (req, res) => {
    const city = req.query.city;

    try {
        const yelpApiKey = process.env.YELPAPIKEY;
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?location=${city}&categories=restaurants`;

        const yelpResponse = await fetch(yelpUrl, {
            headers: {
                Authorization: `Bearer ${yelpApiKey}`,
            },
        });

        if (!yelpResponse.ok) {
            throw new Error('Yelp API request failed');
        }

        const yelpData = await yelpResponse.json();
        const restaurants = yelpData.businesses;

        // OpenWeather API integration
        const openWeatherApiKey = process.env.OWAPI;
        const openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${openWeatherApiKey}`;

        const weatherResponse = await fetch(openWeatherUrl);
        if (!weatherResponse.ok) {
            throw new Error('OpenWeather API request failed');
        }

        const weatherData = await weatherResponse.json();
        //console.log(weatherData);
        const weather = {
            description: weatherData.weather[0].description,
            temperature: weatherData.main.temp,
            icon: weatherData.weather[0].icon,
            iconDesc: weatherData.weather[0].main
        };

        res.render('result', { city, restaurants, weather });
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.render('error', { message: 'Error fetching data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});