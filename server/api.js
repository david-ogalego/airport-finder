const airportsData = require('./data/airports.json');
const countriesData = require('./data/countries.json');
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
	const airportsFiltered = airportsFilteredByQuery.slice(0, 20);
	return res.send(airportsFiltered);
});

app.get('/types', (req, res) => {
	const types = [];
	airportsData.forEach(airport => {
		if (!types.includes(airport.type)) {
			types.push(airport.type);
		}
	});
	return res.send(types);
});

app.get('/countries', (req, res) => {
	const countries = countriesData.map((country) => ({
		name: country.name,
		code: country["alpha-2"]
	}))
	return res.send(countries);
});

app.use(express.static(path.join(__dirname, '/../react-ui/build')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/../react-ui/build/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
