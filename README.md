<h2> A Node.js Application with GeoSpatial Data</h2>
<h3> Express, Jade, Mapbox</h3>

This Node.js application displays two GeoSpatial maps with data from the State of Florida, U.S. Census and Mapbox.

<b>Node.js Highlights:</b>
Express with Jade (Templating and layout)
Integrated with Bootstrap, mapbox.js, <a href="http://leafletjs.com/">leaflet.js</a> and <a href="http://www.requirejs.org">require.js</a>

The Node.js application is hosted on Heroku.  Look at the heroku section of this readme for additional information.

<b>Map Highlights:<b>

1.  FlaMil -> Displays military installations in the State of Florida.  For this map, I leveraged mapbox.js in order to display the map, which is hosted on <a href="https://a.tiles.mapbox.com/v3/jsantisi.hh5513f3/page.html?secure=1#7/28.922/-81.689">mapbox</a>.  
2.  FlCen -> Displays U.S. Census data from 2010 for each county in the State of Florida.  For this map, I used <a href="http://www.cloudmade.com">cloudmade</a> to display the State of Florida OSM layer.  And leaftlet.js to display the mapbox layer with the county population per square mile.  This creation of the U.S. Census layer per county required the processing of Esri shapefiles into a PostGIS instance and QGIS in order to merge the two separate shape files.  Then, I used tilemill (a <a href="http://www.mapbox.com">Mapbox</a> product) in order to create the map layer.  I chose to overlay this layer ontop of Cloudmade in order to showcase how you can leverage both vendors.  Ideally, if you create a mapbox map layer, then you have additional capabilities when you display the layer with mapbox.js.

<b>require.js -> </b>I am glad that this javascript dependency management framework is available.  It makes loading your javascript dependencies a breeze.  I took a modular approach to building the require.js main files.  Each map layer has its own main file for by require.js because they depend on different javascripts.

More info will be available soon... standby.
