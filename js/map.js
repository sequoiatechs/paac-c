var mapOptions = {
      zoom: 8,
      center: new google.maps.LatLng(-0.1895788, -78.487384),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
};

function init() {
  var mapOptions = {
      zoom: 8,
      center: new google.maps.LatLng(-0.1895788, -78.487384),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
  };
  var myMap = new google.maps.Map(document.getElementById('myMap'), mapOptions);
}
google.maps.event.addDomListener(window, 'load', init);
