(function ($) {
  Drupal.behaviors.cfa_map = {
    attach: function(context) {    
      var cfa_map = {};
cfa_map['chicago'] = {
  center: new google.maps.LatLng(41.878113, -87.629798),
  population: 2842518
};
cfa_map['newyork'] = {
  center: new google.maps.LatLng(40.714352, -74.005973),
  population: 8143197
};
cfa_map['losangeles'] = {
  center: new google.maps.LatLng(34.052234, -118.243684),
  population: 3844829
};
var cfa_mapCircle;
function initialize() {
  // Create the map.
  var mapOptions = {
    zoom: 4,
    center: new google.maps.LatLng(37.09024, -95.712891),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  // Construct the circle for each value in citymap.
  // Note: We scale the population by a factor of 20.
  for (var city in cfa_map) {
    var populationOptions = {
      strokeColor: '#FFFF01',
      strokeOpacity: 0.45,
      strokeWeight: 2,
      fillColor: '#FFFF01',
      fillOpacity: 0.35,
      map: map,
      center: cfa_map[city].center,
      radius: cfa_map[city].population / 50
    };
    // Add the circle for this city to the map.
    cfa_mapCircle = new google.maps.Circle(populationOptions);
  }
}

google.maps.event.addDomListener(window, 'load', initialize);   
    }}})(jQuery);