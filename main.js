function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

//   adding google map
 // Initialize and add the map
 function initMap() {
    // The location of Uluru
    const uluru = { lat: 500.67, lng: 131.036 };
    // The map, centered at city name
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: cityname,//city name
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }