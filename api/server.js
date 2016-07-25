const express    = require('express');
const bodyParser = require('body-parser');
const logger     = require('morgan');

const api = require('./api');

const PORT = 8081;

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use('/api', api);

app.listen(PORT, 'localhost', (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.info(`Listening at http://localhost:${PORT}`);
});
