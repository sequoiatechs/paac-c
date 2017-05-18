var mapOptions = {
      zoom: 17,
      center: new google.maps.LatLng(-0.188492, -78.488854),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
};

function init() {
  var mapOptions = {
      zoom: 17,
      center: new google.maps.LatLng(-0.188492, -78.488854),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
  };
  var myMap = new google.maps.Map(document.getElementById('myMap'), mapOptions);

  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var marker = new google.maps.Marker({
      position: myLatLng,
      myMap: myMap,
      icon: iconBase + 'parking_lot_maps.png'
    });
}







google.maps.event.addDomListener(window, 'load', init);
