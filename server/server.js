const express = require('express');
const parser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

const intervalRoute = require('./routes/interval.route');
const projectRoute = require('./routes/project.route');

app.use(express.static('server/public'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use('/interval', intervalRoute);
app.use('/project', projectRoute);

app.listen(PORT, () => {
    console.log(`greetings from port ${PORT}`);
});