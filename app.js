const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const integrationsRouter = require('./integrations-router');

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(cors());
app.use('/integrations', integrationsRouter);

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', error => {
	if (error) {
		throw error;
	}

	console.log(`Listening on port ${PORT}`);
})