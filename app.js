var apiKey = "287b19e546f827a01d779e91f3882bc3";
var date = moment().format("l");

$("#btnSubmit").on("click", function (e) {
  e.preventDefault();
  var cityName = $("#userInput").val();
  currentWeather(cityName);
});

function currentWeather(cityName) {
  $.ajax({
    method: "GET",
    url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`,
    dataType: "json",
  }).then(function (res) {
    console.log(res);

    $("#cityName").text(res.name);
    $("#date").text(date);
    $("#icon").prepend(
      `<img src="https://openweathermap.org/img/wn/${res.weather[0].icon}.png">`
    );

    // converting kelvin to fahrenheit for temperature
    var kelvin = res.main.temp;
    var fahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;
    var temp = fahrenheit.toFixed(0);
    $("#temp").text(`Temperature: ${temp}°F`);

    // not sure how to convert humidity value to %
    $("#humidity").text(`Humidity: ${res.main.humidity}`);

    // converting wind speed from meters per second to miles per hour
    var windSpeedMPS = res.wind.speed;
    var windSpeedMPH = windSpeedMPS * 2.237;
    var wind = windSpeedMPH.toFixed(0);
    $("#wind").text(`Wind Speed: ${wind} mph`);

    // UV Index. This dats seems incorrect, way too high
    var lat = res.coord.lat;
    var lon = res.coord.lon;

    $.ajax({
      method: "GET",
      url: `http://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${lat}&lon=${lon}`,
      dataType: "json",
    }).then(function (res) {
      var uv = res.value.toFixed(0);
      $("#uv").text(`UV Index: ${uv}`);
    });
  });
}