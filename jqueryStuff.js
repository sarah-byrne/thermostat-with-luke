$( document ).ready(function(){
  thermo = new Thermostat();
  displayTemp()
});
$( "#decrease" ).click(function(){
  thermo.decrease(1);
  displayTemp()
});
$( "#increase" ).click(function(){
  thermo.increase(1);
  displayTemp();
});
$( "#powersave" ).click(function(){
  if (thermo._powerSaving == true) {
    thermo.modeOff();
    $( "#powersave" ).text("TURN POWERSAVE ON");
  } else {
    thermo.modeOn();
    $( "#powersave" ).text("TURN POWERSAVE OFF");
  }
});
$( "#reset" ).click(function(){
  thermo.reset();
  displayTemp()
});

function displayTemp() {
  $( "#temperature" ).text(thermo._temp)
  $( "#temperature" ).attr('class', thermo.usage())
}


$('#weatherSelect').change(function(){
  weatherQuery = "http://api.openweathermap.org/data/2.5/weather?id=" + document.getElementById('weatherSelect').value + "&appid=a3d9eb01d4de82b9b8d0849ef604dbed"

  $.get(weatherQuery, function(weatherResponse) {
  $("#weather").html(weatherResponse.weather[0].main);
  });
});
