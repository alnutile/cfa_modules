(function ($) {
  Drupal.behaviors.cfa_invasive_map = {
    attach: function(context, settings) {    






var cfa_mapCircle;
function initialize() {

var coord = (settings.cfa_invasive_map.coordinates);
//console.log(coord);


var index;
var a = coord;
  // Create the map.
  var mapOptions = {
    zoom: 4,
    center: new google.maps.LatLng(37.09024, -95.712891),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  // Construct the circle for each value in citymap.
   for (index = 0; index < a.length; ++index) {
    a[index] = { 
      center: new google.maps.LatLng(lat, lon)
    }
    console.log(a);
    var populationOptions = {
      strokeColor: '#FFFF01',
      strokeOpacity: 0.45,
      strokeWeight: 2,
      fillColor: '#FFFF01',
      fillOpacity: 0.35,
      map: map,
      center: a[index].center,
      radius: 2000000
    };
    // Add the circle for this city to the map.
    cfa_mapCircle = new google.maps.Circle(populationOptions);
  }
}



google.maps.event.addDomListener(window, 'load', initialize);   
    }}})(jQuery);
    
    
    
    


//      var cfa_map = {};
//cfa_map['chicago'] = {
//  center: new google.maps.LatLng(41.878113, -87.629798),
//  population: 16093.44
//};
//cfa_map['newyork'] = {
//  center: new google.maps.LatLng(40.714352, -74.005973),
//  population: 16093.44
//};
//cfa_map['losangeles'] = {
//  center: new google.maps.LatLng(34.052234, -118.243684),
//  population: 16093.44
//};console.log(cfa_map);
//var cfa_mapCircle;
//function initialize() {
//  // Create the map.
//  var mapOptions = {
//    zoom: 4,
//    center: new google.maps.LatLng(37.09024, -95.712891),
//    mapTypeId: google.maps.MapTypeId.TERRAIN
//  };
//  var map = new google.maps.Map(document.getElementById('map-canvas'),
//      mapOptions);
//  // Construct the circle for each value in citymap.
//  // Note: We scale the population by a factor of 20.
//  for (var city in cfa_map) {
//    var populationOptions = {
//      strokeColor: '#FFFF01',
//      strokeOpacity: 0.45,
//      strokeWeight: 2,
//      fillColor: '#FFFF01',
//      fillOpacity: 0.35,
//      map: map,
//      center: cfa_map[city].center,
//      radius: cfa_map[city].population 
//    };
//    // Add the circle for this city to the map.
//    cfa_mapCircle = new google.maps.Circle(populationOptions);
//  }
//}
