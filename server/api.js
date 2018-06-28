const airportsData = require('./data/airports.json');
const countriesData = require('./data/countries.json');
const express = require('express');
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

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
	}
	let airportsFilteredByType = airportsFilteredByName;
	if (req.query.type) {
		airportsFilteredByType = airportsFilteredByName.filter((airport) => airport.type === req.query.type);
	}
	let airportsFilteredByCountry = airportsFilteredByType;
	if (req.query.iso) {
		airportsFilteredByCountry = airportsFilteredByType.filter((airport) => airport.iso === req.query.iso);
	}
	const airportsFiltered = airportsFilteredByCountry.slice(req.query.skip, req.query.take);
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
