const Stock = require("../model/Stock");
const getDailyStock = require("../lib/stock_wrapper");

//function to find the stock price from the database from particular symbol
const stockApi = async (req, res) => {
    try {
      const {symbol} = req.params
      const stock = await Stock.findOne({symbol: symbol});
      if(stock){
        return res.status(200).send(stock)
      }

      const price = await getDailyStock(symbol)
      const stockData = await Stock.create({price, symbol})
      res.status(200).send(stockData);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
};

module.exports = stockApi;

