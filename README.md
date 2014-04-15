<h2> A Node.js Application with GeoSpatial Data</h2>
<h3> Express, Jade, Mapbox</h3>

This Node.js application displays two GeoSpatial maps with data from the State of Florida, U.S. Census and Mapbox.

<b>Node.js Highlights:</b>
Express with Jade (Templating and layout)
Integrated with Bootstrap, mapbox.js, <a href="http://leafletjs.com/">leaflet.js</a> and <a href="http://www.requirejs.org">require.js</a>

The Node.js application is hosted on Heroku.  Look at the heroku section of this readme for additional information.

<b>Map Highlights:<b>

1.  FlaMil -> Displays military installations in the State of Florida.  For this map, I leveraged mapbox.js in order to display the map, which is hosted on <a href="https://a.tiles.mapbox.com/v3/jsantisi.hh5513f3/page.html?secure=1#7/28.922/-81.689">mapbox</a>.  
2.  FlCen -> Displays U.S. Census data from 2010 for each county in the State of Florida.  For this map, I used <a href="http://www.cloudmade.com">cloudmade</a> to display the State of Florida OSM layer.  And leaftlet.js to display the mapbox layer with the county population per square mile.

<b>require.js -> </b>I am glad that this javascript dependency management framework is available.  It makes loading your javascript dependencies a breeze.  I took a modular approach to building the require.js main files.  Each map layer has its own main file for require.js because they depend on different javascripts.  

Heroku: Comming Soon

<h3>GeoSpatial Data Processing </h3>
In today's data driven world, there are plenty of free sites that provide geospatial data.  I wanted to process meaningful data using the <a href="http://www.gdal.org">GDAL</a> Libraries.  I found a post on the <a href="http://blog.apps.chicagotribune.com/2011/03/08/making-maps-1/">Chicage Tribune</a> that walked you through a similar scenario (PostGIS, GDAL, Mapbox and Node.js).  Except that it was for the State of Illinois and it was written back in 2011 - many changes to the software stack since then - but a quality blog entry indeed.  In a nutshell, here are the steps to process your geospatial data.

1. Download the geo-data from U.S. Census Bureau. You have to use the American FactFinder site and search for <i>Population and Housing Occupancy Status: 2010 - County -- Census Tract</i>. In your search criteria, Filter for the State of Florida and All Counties.  This data set will provide you with the Population by county.  Download your states geometry from 
2. Using cvscut (a github project), parse the census data. :>./csvcut -f 4,6,7 -o "," DEC_10_PL_GCTPL2.ST05/DEC_10_GCTPL2.CY10_with_ann.csv | tail +4 > population.csv
4. Load the Census data into a GeoSpatial enabled RDBMS
5. Download a shapefile for the <a href="http://www2.census.gov/geo/tiger/TIGER2010/COUNTY/2010/tl_2010_12_county10.zip">State of Florida</a> - geographic region. Or your state by code tl_2010_<2 digit state code>_county10.zip
6. Load the geometry using GDAL ogr2ogr utility and set the Spherical Mercator.  You must know the tiles that you are using and the Spherical Mercator (EPSG3857 or EPSG4326).
7. Export the merged table with ogr2ogr into a Shapefile
8. Import the Shapefile into Tilemill or point TileMill to the RDBMS.
9. Make your map layer look good.
10. Publish your map layer to Mapbox
11. Export your TileMill mbtiles (/Users/<user>/Documents/Mapbox/tiles/....)
12. Create a Github project with the mbtiles
13. Deploy the mbtiles project to Heroku (Your map layer will now be available on the Web and the Node.js application points to the this TileStream server)



More info will be available soon... standby.
