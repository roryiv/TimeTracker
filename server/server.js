const express = require('express');
const parser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

const timeRoute = require('./routes/time.route');
const projectRoute = require('./routes/project.route');

app.use(express.static('server/public'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use('/time', timeRoute);
app.use('/project', projectRoute);

app.listen(PORT, () => {
    console.log(`greetings from port ${PORT}`);
});