const express = require('express');
const parser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

//const somekindaroute = require(...)

app.use(express.static('server/public'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// app.use('/something', somekindaroute)

app.listen(PORT, () => {
    console.log(`greetings from port ${PORT}`);
});