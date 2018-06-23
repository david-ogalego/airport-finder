const airportsData = require('../data/airports.json');
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

function search(query) {
	return function(element) {
		for(var i in query) {
			if(query[i] !== element[i]) {
				return false;
			}
		}
		return true;
	}
}

app.get('/airports', (req, res) => {
	console.log('query' + JSON.stringify(req.query));
	res.send(airportsData.filter(search(req.query)));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
