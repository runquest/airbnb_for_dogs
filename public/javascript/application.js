$(document).ready(function() {
    // $(".nav").text("Book something")
  var map;
  function initialize() {
    var mapOptions = {
      zoom: 8,
      center: new google.maps.LatLng(-34.397, 150.644)
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
  }

  // initialize();
  google.maps.event.addDomListener(window, 'load', initialize);
  // google.maps.event.trigger(map, "resize");
});




  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

