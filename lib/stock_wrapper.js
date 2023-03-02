const axios = require("axios");

// fetch stock price based on symbol
const getDailyStock = async(symbol) => {
    const response = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.API_KEY}`);
      const { data } = response;
      const price = data['Global Quote']['05. price'];

      return price
}

module.exports = getDailyStock;

