requirejs.config({
    baseUrl: '/public',
    paths: {
        jquery: ['//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min','javascripts/jquery-1.11.0.min.js'],
        bootstrap:'javascripts/bootstrap.min',
        mapbox: 'https://api.tiles.mapbox.com/mapbox.js/v1.6.2/mapbox'
    },
    shim: {
        'bootstrap':{deps: ['jquery']}
    }
});
 
requirejs([
 'jquery','bootstrap','mapbox'], function() {
 loadmap();
});