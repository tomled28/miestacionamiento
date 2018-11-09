function initMap() {
  var currentPositionMarker;
  navigator.geolocation.getCurrentPosition(function(e) {
    var options = {
      zoom: 13,
      center: { lat: e.coords.latitude, lng: e.coords.longitude }
    };
    var map = new google.maps.Map(document.getElementById("map"), options);

    var iconBase = "https://maps.google.com/mapfiles/kml/shapes/";
    var infowindow = new google.maps.InfoWindow({});

    //haces el ajax.
    //el ajax retorna en success un data.
    //haces un loop de data.
    //data.map(p => {addMarker({lat: p.lat, p.lng})})
    $.ajax({
      method: "GET",
      url: "/get-points",
      success: function(data) {
        data = JSON.parse(data);
        data.map(p => {
          addMarker(p);
        });
      }
    });
    var currentInfoWindow = undefined;
    function addMarker(data) {
      var marker = new google.maps.Marker({
        position: { lat: parseFloat(data.lat), lng: parseFloat(data.lng) },
        map: map,
        icon: iconBase + "parking_lot_maps.png"
      });

      marker.addListener("click", function() {
        var infowindow = new google.maps.InfoWindow({
          content: "<h1>" + data.nombre + "</h1>"
        });
        if (currentInfoWindow != null) {
          currentInfoWindow.close();
        }
        infowindow.open(map, marker);
        currentInfoWindow = infowindow;
      });
    }

    currentPositionMarker = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(e.coords.latitude, e.coords.longitude),
      title: "Current Position"
    });
    map.panTo(new google.maps.LatLng(e.coords.latitude, e.coords.longitude));

    watchCurrentPosition();
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
