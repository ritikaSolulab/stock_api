const mongoose = require("mongoose");

const StockSchema = mongoose.Schema(
    {
        price: {type: Number},
        symbol: {type: String, required: true}
    },
    {timeStamp:true}
);

module.exports = mongoose.model("Stock", StockSchema);