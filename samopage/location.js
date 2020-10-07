const initMap = () => {
  let options = {
    zoom: 8,
    center: {lat:34.0093515,lng:-118.49746820000001}
  }
  
  let santaMonica = {lat:34.0093515,lng:-118.49746820000001}
  let map = new google.maps.Map(document.getElementById('map'), options);
  let marker = new google.maps.Marker({position: santaMonica, map: map})
}  

