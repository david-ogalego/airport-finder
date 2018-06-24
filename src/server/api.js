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

function searchByName(name) {
	return function(element) {
		return element && element.name && element.name.indexOf(name) > -1;
	}
}

app.get('/airports', (req, res) => {
	console.log('query' + JSON.stringify(req.query));
	let airportsFilteredByName = airportsData;
	if (req.query.name) {
		airportsFilteredByName = airportsData.filter(searchByName(req.query.name));
		delete req.query.name;
	}
	const airportsFilteredByQuery = airportsFilteredByName.filter(search(req.query));
	console.log(airportsFilteredByQuery.length);
	const airportsFiltered = airportsFilteredByQuery.slice(0, 20);
	return res.send(airportsFiltered);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
