const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());


app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));


// Currency endpoint 
app.get('/api/currency', async (req, res) => {
    try {
        let amount = req.query.amount ?? req.body?.amount;
        if (amount === undefined) return res.status(400).json({ error: 'Missing amount parameter. Use ?amount=100' });
        amount = Number(amount);
        if (Number.isNaN(amount) || amount < 0) {
            return res.status(400).json({ error: 'Invalid amount. Provide a non-negative number.' });
        }
        amount = Math.max(0, amount);

        const INR_TO_USD = 0.012;
        const INR_TO_EUR = 0.011;
        const usd = (amount * INR_TO_USD).toFixed(2);
        const eur = (amount * INR_TO_EUR).toFixed(2);
        return res.status(200).json({ usd, eur});
    } catch (error) {
        const status = error.response?.status ?? 500;
        return res.status(status).json({ error: error.message, details: error.response?.data });
    }
});


// Quote endpoint
app.get('/api/quote', async (req, res) => {
    try {
        const QUOTES = [
            "Believe you can and you're halfway there.",
            "Keep pushing forward, one small step at a time.",
            "Success is not final; failure is not fatal: it is the courage to continue that counts.",
            "Dream big. Start small. Act now.",
            "Discipline beats motivation when motivation fades.",
            "Your only limit is your mind.",
            "If it matters to you, you’ll find a way. If not, you’ll find an excuse.",
        ];
        const q = QUOTES[Math.floor(Math.random() * QUOTES.length)];
        return res.status(200).json({ quote: q });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Weather endpoint - simplified current weather (default: London)
app.get('/api/weather', async (req, res) => {
    try {
        const city = req.query.city || req.body?.city || 'London';
        const key = process.env.OPENWEATHER_API_KEY;
        if (!key) return res.status(500).json({ error: 'Server missing OPENWEATHER_API_KEY' });

        const resp = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: { q: city, appid: key, units: 'metric' }
        });
        const data = resp.data;
        const payload = {
            city: data.name,
            temp: data.main?.temp ?? null,
            desc: data.weather?.[0]?.description ?? 'N/A'
        };
        return res.status(200).json(payload);
    } catch (error) {
        const status = error.response?.status ?? 500;
        return res.status(status).json({ error: error.message, details: error.response?.data });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});