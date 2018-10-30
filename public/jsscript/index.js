function initMap() {
    var currentPositionMarker;
    navigator.geolocation.getCurrentPosition(function(e) {
      var options = {
        zoom: 15,
        center: { lat: e.coords.latitude, lng: e.coords.longitude }
      };
      var map = new google.maps.Map(document.getElementById("map"), options);
  
      currentPositionMarker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(
          e.coords.latitude,
          e.coords.longitude
        ),
        title: "Current Position"
      });
      map.panTo(
        new google.maps.LatLng(e.coords.latitude, e.coords.longitude)
      );
  
      watchCurrentPosition()
    });
  
    var watchCurrentPosition = function() {
      var positionTimer = navigator.geolocation.watchPosition(function(position) {
        setMarkerPosition(currentPositionMarker, position);
      });
    };
  
    function setMarkerPosition(marker, position) {
      marker.setPosition(
        new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        )
      );
    }
  }