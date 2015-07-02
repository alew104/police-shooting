// Function to draw your map
var drawMap = function() {
  var map = L.map('container').setView[34, -100], 10);
  var layer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
  layer.addTo(map);

  // Create map and set view


  // Create an tile layer variable using the appropriate url

  // Add the layer to your map


  getData();
  window.onload = cookiefix;

}

// Function for getting data
var getData = function() {
  var data;
    $.ajax({
    url:'https://data.seattle.gov/resource/7ais-f98f.json?year=2015&$limit=500',
    type: "get",
    success:function(dat) {
       data = dat
    },
   dataType:"json"
})

customBuild(data);

  // Execute an AJAX request to get the data in data/response.js


  // When your request is successful, call your customBuild function

}

// Do something creative with the data here!
var customBuild = function(data)
  //grab all the data
  for (var i = 0; i < data.length; i++){
      var offense_type = data.offense_type;
      var data_reported = data.data_reported;
      var latitude = data.location.latitude;
      var longitude = data.location.longitude;
      var month = data.month;
      var hundred_block_location = data.hundred_block_location;
      var summarized_offense_description = data.summarized_offense_description;
  }
}
