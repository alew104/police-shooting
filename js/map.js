/*var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

function initmap() {
    // set up the map
    map = new L.Map('container');

    // create the tile layer with correct attribution
    var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib});

    // start the map in South-East England
    map.setView(new L.LatLng(51.3, 0.7),9);
    map.addLayer(osm);
}*/

var map;
var data;
var marker;

function drawMap() {
  map = L.map('container').setView([47.6097,-122.3331],10);
  var layer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
  layer.addTo(map);

  // Create map and set view


  // Create an tile layer variable using the appropriate url

  // Add the layer to your map


  getData();
}

// Function for getting data
var getData = function() {

    $.ajax({
    url:'https://data.seattle.gov/resource/7ais-f98f.json?year=2015&$limit=500',
    type: "get",
    success:function(dat) {
       data = dat
    },
   dataType:"json"
})

    customBuild();


  // Execute an AJAX request to get the data in data/response.js


  // When your request is successful, call your customBuild function

}

// Do something creative with the data here!
var customBuild = function() {
  //grab all the data
        data.map(function(d){
            var circle = new L.circleMarker([d.latitude, d.longitude], 200,
                {color:'red', opacity:.5}).addTo(map)
        });


/*for (var i = 0; i < data.length(); i++){
    var offense_type = data[i].offense_type;
    var data_reported = data[i].data_reported;
    var latitude = data[i].latitude;
    var longitude = data[i].longitude;
    var month = data[i].month;
    var hundred_block_location = data[i].hundred_block_location;
    var summarized_offense_description = data[i].summarized_offense_description;

    marker = new L.circle([latitude, longitude], 4000, {
        color: 'red',
        opacity: .5
    });
    marker.addTo(map);
}*/
}
