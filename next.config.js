const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    webpack: (config) => {
        config.resolve.alias['~'] = path.resolve(__dirname, 'src');
        return config;
    },
    env: {
        apiUrl: process.env.API_URL,
        apiKey: process.env.API_KEY,
        siteUrl: process.env.SITE_URL,
    },
};
