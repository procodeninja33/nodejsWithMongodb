const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const dbConfig = require('./config/dbConfig');


app.use(bodyparser.json());
app.use(cors());


app.listen(process.env.PORT, () => {
    console.log(`1, Server running at port number ${process.env.PORT}.`);
    require("./routes")(app);
    dbConfig.connectDb();
});