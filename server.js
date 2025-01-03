const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;

// Proxy configuration
app.use('/api', createProxyMiddleware({
    target: 'https://api.rapidapi.com', // Adjust to your API's base URL
    changeOrigin: true,
    pathRewrite: {
        '^/api': '', // Remove '/api' prefix from requests
    },
    headers: {
        'X-RapidAPI-Key': 'c846753c0cmsh011a5ca3fc881f1p1f142fjsn56095a7e72cb',
        'X-RapidAPI-Host': 'ski-forecast.p.rapidapi.com',
    }
}));

app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});
