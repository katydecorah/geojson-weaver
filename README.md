# Shapes maker

Combine your data with a GeoJSON countries or US states.

These files contain each country or US state and it's GeoJSON polygon (you shouldn't need to change these files):

* [_data/countries.yml](https://github.com/katydecorah/shapes-maker/blob/master/_data/countries.yml)
* [_data/states.yml](https://github.com/katydecorah/shapes-maker/blob/master/_data/states.yml)

Create a new `.yml` file in the `_data` folder with your data.

Examples:

* [_/data/leave.yml](https://github.com/katydecorah/shapes-maker/blob/master/_data/leave.yml) (references countries)
* [_/data/vaccinations.yml](https://github.com/katydecorah/shapes-maker/blob/master/_data/vaccinations.yml) (references states)

Your dataset much match the state/country name found in the `countries/states.yml` file.

Create a `.js` file to loop, combine the data, and build the GeoJSON, see [country-data.js](https://github.com/katydecorah/shapes-maker/blob/master/country-data.js) for an example and [index.html](https://github.com/katydecorah/shapes-maker/blob/master/index.html) to load the GeoJSON on a map.

---

* Country GeoJSON from https://github.com/johan/world.geo.json
* State GeoJSON from Mapbox
