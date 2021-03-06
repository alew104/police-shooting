var map;
var data;
var marker;
var blockData;
var blockLocationData;

function drawMap() {
  map = L.map('container').setView([39.833, -98.5833],4);
  var layer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
  layer.addTo(map);

  getData();
}

// Function for getting data
var getData = function() {

    $.ajax({
    url:"response.json",
    type: "get",
    success:function(dat) {
       data = dat
       customBuild();
    },
   dataType:"json"
})
  console.log("data retrieved");
}

// Do something creative with the data here!
var customBuild = function() {
  console.log("parsing data");
  //grab all the data
        data.map(function(d){
          var latitude = d.lat;
          var longitude = d.lng;
          var date = d['Date Searched'];
          var armed = d['Armed or Unarmed?'];
          var age = d["Victim's Age"];
          var weapon = d.Weapon;
          console.log(age);
          var hok = d['Hit or Killed?'];
          var gender = d["Victim's Gender"];
          console.log(hok);
              ageKilled(longitude, latitude, age, weapon, gender);
        });

}

function ageKilled (longitude, latitude, age, weapon, gender){
    if (age == undefined){
      age = 0;
    }
    if (age < 18){
      if (gender == 'Male'){
        var circle = new L.circle([latitude, longitude], age * 100,
              {color:'blue', opacity:0.5});
      } else {
        var circle = new L.circle([latitude, longitude], age * 100,
              {color:'red', opacity:0.5});
      }
    } else {
      if (gender == 'Male'){
        var circle = new L.circle([latitude, longitude], age * 30,
              {color:'blue', opacity:0.5});
      } else {
        var circle = new L.circle([latitude, longitude], age * 30,
              {color:'red', opacity:0.5});
      }
    }
    circle.bindPopup('Age: ' +  age + ' ' + 'Weapon: ' + weapon + ' ' + 'Gender ' + gender);
    circle.addTo(map);
}
