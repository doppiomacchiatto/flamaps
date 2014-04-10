requirejs.config({
    baseUrl: '/public',
    paths: {
        jquery: ['//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min','javascripts/jquery-1.11.0.min.js'],
        bootstrap:'javascripts/bootstrap.min'
    },
    shim: {
        'bootstrap':{deps: ['jquery']}
    }
});
 
requirejs([
    'jquery',
    'bootstrap'
    ], function($, _bootstrap){
        // this is where all the site code should begin
        return {};
});