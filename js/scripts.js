var popapButton = document.querySelector(".maps-contacts a");
var popap = document.querySelector(".popap");
var popapClose = document.querySelector(".modal-content-close");

popapButton.addEventListener("click", function(event) {
    event.preventDefault();
    popap.classList.add("popap-show");
});

popapClose.addEventListener("click", function(event) {
    event.preventDefault();
    popap.classList.remove("popap-show");
});



function initialize() {
    var mapsCanvas = document.getElementById("maps-canvas");

    var mapOptions = {
        scrollwheel: false,    
        zoom: 17,
        center: new google.maps.LatLng(59.9391274,30.3192746)        
        }
    var map = new google.maps.Map(mapsCanvas, mapOptions);
    
    var image = "img/marker.png";
    var myLatLng = new google.maps.LatLng(59.9387942,30.3230833);
    var nerdsMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
  }   
google.maps.event.addDomListener(window, "load", initialize);