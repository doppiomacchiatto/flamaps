requirejs.config({
    baseUrl: '/public',
    paths: {
        jquery: ['//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min','javascripts/jquery-1.11.0.min.js'],
        bootstrap:'javascripts/bootstrap.min',
        leaflet: 'http://cdn.leafletjs.com/leaflet-0.7.2/leaflet'
    },
    shim: {
        'bootstrap':{deps: ['jquery']}
    }
});
 
requirejs([
 'jquery','bootstrap','leaflet'], function() {
 loadmap();
});