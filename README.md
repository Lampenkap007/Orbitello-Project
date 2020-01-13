# Orbitello-Project

Orbitello is an online tool to get the live location of satellites in orbit.

## Usage

Run the project in a live server to get all functions working properly.

## Max API calls

Orbitello makes use of the N2YO API, which has a limit of 500 API calls per hour.

## Adding more satellites
Add the following code in MyUL:
``` HTML
<li class="card" onclick="--FUNCTION--">
          <img
            class="satelliteImage"
            src="--BACKGROUNDIMG--"
            alt=""
          /><a class="satName">--NAME--</a>
        </li>
```
Add the following code in js.js:
```JavaScript
function --FUNCTION-- {
  url =
    "https://www.n2yo.com/rest/v1/satellite/positions/--NORAD-ID--/41.702/-76.014/0/2/&apiKey=--API KEY--";
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
```
The satellite is now added to the filterlist and can be viewed in the map.

## Further development
Some bugs appear when searching satellites via NORAD-ID.

It is still not possible to get all satellites in one map at once.
