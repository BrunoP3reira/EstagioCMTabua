function initMap() {
    var mapOptions = {
        center: {lat: -34.397, lng: 150.644}, // Coordenadas do centro do mapa
        zoom: 8 // Zoom do mapa
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}