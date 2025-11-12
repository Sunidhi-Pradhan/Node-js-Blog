require ('dotenv').config();

const express = require ('express');
const expresslayout = require ('express-ejs-layouts');

// initialize express app
const app = express();
const port = 5000 || process.env.PORT;

app.use(express.static('public'));

app.use(expresslayout);
app.set('layout','./layouts/main');
app.set('view engine','ejs');

app.use('/',require('./server/routes/main'));

app.listen(port,()=> {
    console.log(`App listening on port ${port}`);
});

