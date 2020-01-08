function submit() {
  var x = document.getElementById("nameInput").value;
  document.getElementById("welcome").innerHTML = "Welcome " + x;
  var y = document.getElementById("login");
  if (y.style.display === "none") {
    y.style.animation = "fadeOutLogin 1s";
  } else {
    y.style.animation = "fadeOutLogin 1s";
  }
  document.getElementsByTagName("BODY")[0].className = "body";
  document.getElementById("welcome").className = "welcome";
  document.getElementById("preloader").className = "preloader";
  document.getElementById("upperbar").className = "upperbar";
}
function onload() {
  window.scrollTo(0, 0);
  signOut();
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
      console.log("User signed out.");
    });
  }
}
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var x = profile.getGivenName();
  document.getElementById("welcome").innerHTML = "Welcome " + x;
  var y = document.getElementById("login");
  if (y.style.display === "none") {
    y.style.animation = "fadeOutLogin 1s";
  } else {
    y.style.animation = "fadeOutLogin 1s";
  }
  document.getElementsByTagName("BODY")[0].className = "body";
  document.getElementById("welcome").className = "welcome";
  document.getElementById("preloader").className = "preloader";
  document.getElementById("upperbar").className = "upperbar";
  console.log("ID: " + profile.getId());
  console.log("Full Name: " + profile.getName());
  console.log("Given Name: " + profile.getGivenName());
  console.log("Family Name: " + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());
}

let lat, long, marker, name, url;
url =
  "https://www.n2yo.com/rest/v1/satellite/positions/25544/41.702/-76.014/0/2/&apiKey=V43FZL-MKYFLC-Q439N7-48RP";

function setSpaceStation() {
  url =
    "https://www.n2yo.com/rest/v1/satellite/positions/25544/41.702/-76.014/0/2/&apiKey=V43FZL-MKYFLC-Q439N7-48RP";
  $.ajax({
    // URL waar de gegevens vandaan gehaald worden. Key is persoonlijk.
    url: url,
    success: function(whatyougot) {
      document.getElementById("name").innerHTML = whatyougot.info.satname;
      document.getElementById("id").innerHTML = "ID: " + whatyougot.info.satid;

      document.getElementById("lat").innerHTML =
        "Latitude: " + whatyougot.positions[0].satlatitude;
      document.getElementById("long").innerHTML =
        "Longitude: " + whatyougot.positions[0].satlongitude;
      name = whatyougot.info.satname;
      lat = whatyougot.positions[0].satlatitude;
      long = whatyougot.positions[0].satlongitude;
      initMap();
    }
  });
}
function setStarLink() {
  url =
    "https://www.n2yo.com/rest/v1/satellite/positions/70000/41.702/-76.014/0/2/&apiKey=V43FZL-MKYFLC-Q439N7-48RP";
  $.ajax({
    // URL waar de gegevens vandaan gehaald worden. Key is persoonlijk.
    url: url,
    success: function(whatyougot) {
      document.getElementById("name").innerHTML = whatyougot.info.satname;
      document.getElementById("id").innerHTML = "ID: " + whatyougot.info.satid;

      document.getElementById("lat").innerHTML =
        "Latitude: " + whatyougot.positions[0].satlatitude;
      document.getElementById("long").innerHTML =
        "Longitude: " + whatyougot.positions[0].satlongitude;
      name = whatyougot.info.satname;
      lat = whatyougot.positions[0].satlatitude;
      long = whatyougot.positions[0].satlongitude;
      initMap();
    }
  });
}
function setGPS() {
  url =
    "https://www.n2yo.com/rest/v1/satellite/positions/32260/41.702/-76.014/0/2/&apiKey=V43FZL-MKYFLC-Q439N7-48RP";
  $.ajax({
    // URL waar de gegevens vandaan gehaald worden. Key is persoonlijk.
    url: url,
    success: function(whatyougot) {
      document.getElementById("name").innerHTML = whatyougot.info.satname;
      document.getElementById("id").innerHTML = "ID: " + whatyougot.info.satid;

      document.getElementById("lat").innerHTML =
        "Latitude: " + whatyougot.positions[0].satlatitude;
      document.getElementById("long").innerHTML =
        "Longitude: " + whatyougot.positions[0].satlongitude;
      name = whatyougot.info.satname;
      lat = whatyougot.positions[0].satlatitude;
      long = whatyougot.positions[0].satlongitude;
      initMap();
    }
  });
}

function getLatLong() {
  $.ajax({
    // URL waar de gegevens vandaan gehaald worden. Key is persoonlijk.
    url: url,
    success: function(whatyougot) {
      document.getElementById("name").innerHTML = whatyougot.info.satname;
      document.getElementById("id").innerHTML = "ID: " + whatyougot.info.satid;

      document.getElementById("lat").innerHTML =
        "Latitude: " + whatyougot.positions[0].satlatitude;
      document.getElementById("long").innerHTML =
        "Longitude: " + whatyougot.positions[0].satlongitude;
      name = whatyougot.info.satname;
      lat = whatyougot.positions[0].satlatitude;
      long = whatyougot.positions[0].satlongitude;
      initMap();
    }
  });
}
// Initialize and add the map
function initMap() {
  // The location of SpaceStation
  var SpaceStation = {
    lat: lat,
    lng: long
  };
  // The map, centered at SpaceStation
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: SpaceStation,
    mapTypeId: "satellite"
  });
  // The marker, positioned at SpaceStation
  marker = new google.maps.Marker({
    position: SpaceStation,
    map: map,
    icon: {
      url: "space-station.png",
      labelOrigin: { x: 12, y: -10 }
    },
    animation: google.maps.Animation.DROP,
    label: {
      color: "white",
      fontSize: "14px",
      text: name
    },
    optimized: false,
    visible: true
  });

  setInterval(function() {
    $.ajax({
      // URL waar de gegevens vandaan gehaald worden. Key is persoonlijk.
      url: url,
      success: function(whatyougot) {
        document.getElementById("name").innerHTML = whatyougot.info.satname;
        document.getElementById("lat").innerHTML =
          "Latitude: " + whatyougot.positions[0].satlatitude;
        document.getElementById("long").innerHTML =
          "Longitude: " + whatyougot.positions[0].satlongitude;
        lat = whatyougot.positions[0].satlatitude;
        long = whatyougot.positions[0].satlongitude;
        var newLatLng = new google.maps.LatLng(lat, long);
        marker.setPosition(newLatLng);
      }
    });
  }, 5000);
}

function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
function search() {
  var norad = document.getElementById("myInput").value;
  url =
    "https://www.n2yo.com/rest/v1/satellite/positions/" +
    norad +
    "/41.702/-76.014/0/2/&apiKey=V43FZL-MKYFLC-Q439N7-48RP";
  $.ajax({
    // URL waar de gegevens vandaan gehaald worden. Key is persoonlijk.
    url: url,
    success: function(whatyougot) {
      setTimeout(function() {
        if (whatyougot.info.satname == "undefined") {
          alert("Invalid NORAD-ID");
          url =
            "https://www.n2yo.com/rest/v1/satellite/positions/25544/41.702/-76.014/0/2/&apiKey=V43FZL-MKYFLC-Q439N7-48RP";
        } else {
          if (whatyougot.positions[0].satlatitude == "0") {
            alert("Satellite no longer in orbit");
            document.getElementById("id").innerHTML =
              "ID: " + document.getElementById("myInput").value;
            marker.setMap(null);
          }
        }
      }, 2000);
    }
  });
}
