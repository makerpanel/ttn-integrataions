const express = require('express');
const pool = require('./pool');
const util = reuqire('./util');

const integrationsRouter = express.Router();

integrationsRouter.post('/', async (req, res, next) => {
	try {
		// Get data from body
		const data = req.body;
		// Extract props that are used
		const {app_id: appId, dev_id: devId, metadata, payload_fields: payloadFields} = data;
		const timestamp = util.truncateTimestampForMySQL(metadata.time);

		await pool.query(`call addPayload('${devId}', '${appId}', 'ttn', '${payloadFields}', '${metadata}', '${timestamp}');`);
	} catch (error) {
		console.error(error);
		next(error);
	}
});

module.exports = integrationsRouter;
