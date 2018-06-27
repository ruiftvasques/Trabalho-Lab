//modulos
const request = require('request');
const hbs = require('hbs');
const express = require('express');
//instancia biblioteca express
const app = express();
app.use(express.static(__dirname + "/public/"));
app.set("view engine", "hbs");

//chaves
const keys = require("./keys");

var time;
var summary;
var icon;
var precipProbability;
var temperature;
var apparentTemperature;
var humidity;
var windSpeed;
var uvIndex;


//hora 0

var summary1H0;
var icon1H0;
var timeH0;
var summaryH0;
var iconH0;
var precipProbabilityH0;
var temperatureH0;
var apparentTemperatureH0;
var humidityH0;
var windSpeedH0;
var uvIndexH0;
var inf;


//hora 1

var timeH1;
var summaryH1;
var iconH1;
var precipProbabilityH1;
var temperatureH1;
var apparentTemperatureH1;
var humidityH1;
var windSpeedH1;
var uvIndexH1;
var infH1;

//hora 2

var timeH2;
var summaryH2;
var iconH2;
var precipProbabilityH2;
var temperatureH2;
var apparentTemperatureH2;
var humidityH2;
var windSpeedH2;
var uvIndexH2;
var infH2;

//hora 3

var timeH3;
var summaryH3;
var iconH3;
var precipProbabilityH3;
var temperatureH3;
var apparentTemperatureH3;
var humidityH3;
var windSpeedH3;
var uvIndexH3;
var infH3;

//hora 4

var timeH4;
var summaryH4;
var iconH4;
var precipProbabilityH4;
var temperatureH4;
var apparentTemperatureH4;
var humidityH4;
var windSpeedH4;
var uvIndexH4;
var infH4;

//hora 5

var timeH5;
var summaryH5;
var iconH5;
var precipProbabilityH5;
var temperatureH5;
var apparentTemperatureH5;
var humidityH5;
var windSpeedH5;
var uvIndexH5;
var infH5;

//hora 6

var timeH6;
var summaryH6;
var iconH6;
var precipProbabilityH6;
var temperatureH6;
var apparentTemperatureH6;
var humidityH6;
var windSpeedH6;
var uvIndexH6;
var infH6;


//dia atual
var summary1D0;
var icon1D0;
var timeD0;
var summaryD0;
var iconD0;
var precipProbabilityD0;
var temperatureHighD0;
var temperatureLowD0;
var humidityD0;
var windSpeedD0;
var uvIndexD0;
var infD0;


//dia 1

var timeD1;
var summaryD1;
var iconD1;
var precipProbabilityD1;
var temperatureHighD1;
var temperatureLowD1;
var humidityD1;
var windSpeedD1;
var uvIndexD1;
var infD1;

//dia 2

var timeD2;
var summaryD2;
var iconD2;
var precipProbabilityD2;
var temperatureHighD2;
var temperatureLowD2;
var humidityD2;
var windSpeedD2;
var uvIndexD2;
var infD2;



//endereço usado
var formatted_address;

//horas
var dia = new Date().getDay();
var mes = new Date().getMonth();
var horas = new Date().getHours();
var min = new Date().getMinutes();
var minutos = min;

if (min < 10) {
  minutos = "0" + min;
} else {
  minutos = min;
}
//var seg=new Date().getSeconds();

var w;
//objetos
app.get('/', (request, response) => {

  response.render('inicio.hbs', {
    title: "World Weather",
  });
});


app.get('/weather', (req, res) => {


  if (req.query.local == undefined) {
    var pedido = w;
  } else {

    var pedido = req.query.local;

  }
  w = pedido;
  var encodedAdress = encodeURIComponent(pedido);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}&key=${keys.googleKey}`,
    json: true
  }, (error, response, body) => {


    try {
      var lat = body.results[0].geometry.location.lat;
      var lng = body.results[0].geometry.location.lng


      formatted_address = body.results[0].formatted_address;
      console.log("latitude:" + lat);
      console.log("longitude:" + lng);
      console.log("A morada é " + formatted_address);

      request({
        url: `https://api.darksky.net/forecast/${keys.darksky}/${lat},${lng}?units=si`, json: true
      }, (DSerror, DSresponse, DSbody) => {
        console.log(body);
        time = horas + ":" + minutos + "H";
        summary = DSbody.currently.summary;
        icon = DSbody.currently.icon
        precipProbability = DSbody.currently.precipProbability;
        temperature = DSbody.currently.temperature + " \u00BAC";
        apparentTemperature = DSbody.currently.apparentTemperature + " \u00BAC";
        humidity = DSbody.currently.humidity;
        windSpeed = DSbody.currently.windSpeed + "Km/h";
        uvIndex = DSbody.currently.uvIndex;



        //hora atual
        summary1H0 = DSbody.hourly.summary;
        icon1H0 = DSbody.hourly.icon;
        timeH0 = horas + "H";
        summaryH0 = DSbody.hourly.data[0].summary;
        iconH0 = DSbody.hourly.data[0].icon;
        precipProbabilityH0 = DSbody.hourly.data[0].precipProbability;
        temperatureH0 = DSbody.hourly.data[0].temperature + " \u00BAC";
        apparentTemperatureH0 = DSbody.hourly.data[0].apparentTemperature + " \u00BAC";
        humidityH0 = DSbody.hourly.data[0].humidity;
        windSpeedH0 = DSbody.hourly.data[0].windSpeed + "Km/h";
        uvIndexH0 = DSbody.hourly.data[0].uvIndex;





        //hora 1
        timeH1 = horas + 1 + "H";
        summaryH1 = DSbody.hourly.data[1].summary;
        iconH1 = DSbody.hourly.data[1].icon;
        precipProbabilityH1 = DSbody.hourly.data[1].precipProbability;
        temperatureH1 = DSbody.hourly.data[1].temperature + " \u00BAC";
        apparentTemperatureH1 = DSbody.hourly.data[1].apparentTemperature + " \u00BAC";
        humidityH1 = DSbody.hourly.data[1].humidity;
        windSpeedH1 = DSbody.hourly.data[1].windSpeed + "Km/h";
        uvIndexH1 = DSbody.hourly.data[1].uvIndex;

        //hora 2
        timeH2 = horas + 2 + "H";
        summaryH2 = DSbody.hourly.data[2].summary;
        iconH2 = DSbody.hourly.data[2].icon;
        precipProbabilityH2 = DSbody.hourly.data[2].precipProbability;
        temperatureH2 = DSbody.hourly.data[2].temperature + " \u00BAC";
        apparentTemperatureH2 = DSbody.hourly.data[2].apparentTemperature + " \u00BAC";
        humidityH2 = DSbody.hourly.data[2].humidity;
        windSpeedH2 = DSbody.hourly.data[2].windSpeed + "Km/h";
        uvIndexH2 = DSbody.hourly.data[2].uvIndex;


        //hora 3
        timeH3 = horas + 3 + "H";
        summaryH3 = DSbody.hourly.data[3].summary;
        iconH3 = DSbody.hourly.data[3].icon;
        precipProbabilityH3 = DSbody.hourly.data[3].precipProbability;
        temperatureH3 = DSbody.hourly.data[3].temperature + " \u00BAC";
        apparentTemperatureH3 = DSbody.hourly.data[3].apparentTemperature + " \u00BAC";
        humidityH3 = DSbody.hourly.data[3].humidity;
        windSpeedH3 = DSbody.hourly.data[3].windSpeed + "Km/h";
        uvIndexH3 = DSbody.hourly.data[3].uvIndex;

        //hora 4
        timeH4 = horas + 4 + "H";
        summaryH4 = DSbody.hourly.data[4].summary;
        iconH4 = DSbody.hourly.data[4].icon;
        precipProbabilityH4 = DSbody.hourly.data[4].precipProbability;
        temperatureH3 = DSbody.hourly.data[4].temperature + " \u00BAC";
        apparentTemperatureH3 = DSbody.hourly.data[4].apparentTemperature + " \u00BAC";
        humidityH3 = DSbody.hourly.data[4].humidity;
        windSpeedH3 = DSbody.hourly.data[4].windSpeed + "Km/h";
        uvIndexH3 = DSbody.hourly.data[4].uvIndex;

        //hora 4
        timeH4 = horas + 5 + "H";
        summaryH4 = DSbody.hourly.data[5].summary;
        iconH4 = DSbody.hourly.data[5].icon;
        precipProbabilityH4 = DSbody.hourly.data[5].precipProbability;
        temperatureH4 = DSbody.hourly.data[5].temperature + " \u00BAC";
        apparentTemperatureH4 = DSbody.hourly.data[5].apparentTemperature + " \u00BAC";
        humidityH4 = DSbody.hourly.data[5].humidity;
        windSpeedH4 = DSbody.hourly.data[5].windSpeed + "Km/h";
        uvIndexH4 = DSbody.hourly.data[5].uvIndex;
        //hora 5
        timeH5 = horas + 5 + "H";
        summaryH5 = DSbody.hourly.data[5].summary;
        iconH5 = DSbody.hourly.data[5].icon;
        precipProbabilityH5 = DSbody.hourly.data[5].precipProbability;
        temperatureH5 = DSbody.hourly.data[5].temperature + " \u00BAC";
        apparentTemperatureH5 = DSbody.hourly.data[5].apparentTemperature + " \u00BAC";
        humidityH5 = DSbody.hourly.data[5].humidity;
        windSpeedH5 = DSbody.hourly.data[5].windSpeed + "Km/h";
        uvIndexH5 = DSbody.hourly.data[5].uvIndex;


        //hora 6
        timeH6 = horas + 6 + "H";
        summaryH6 = DSbody.hourly.data[6].summary;
        iconH6 = DSbody.hourly.data[6].icon;
        precipProbabilityH6 = DSbody.hourly.data[6].precipProbability;
        temperatureH6 = DSbody.hourly.data[6].temperature + " \u00BAC";
        apparentTemperatureH6 = DSbody.hourly.data[6].apparentTemperature + " \u00BAC";
        humidityH6 = DSbody.hourly.data[6].humidity;
        windSpeedH6 = DSbody.hourly.data[6].windSpeed + "Km/h";
        uvIndexH6 = DSbody.hourly.data[6].uvIndex;


        //dia atual
        timeD0 = dia + "-" + mes;
        summary1D0 = DSbody.daily.summary;
        icon1D0 = DSbody.daily.icon;
        summaryD0 = DSbody.daily.data[0].summary;
        iconD0 = DSbody.daily.data[0].icon;
        precipProbabilityD0 = DSbody.daily.data[0].precipProbability;
        temperatureHighD0 = DSbody.daily.data[0].temperatureHigh + " \u00BAC";
        temperatureLowD0 = DSbody.daily.data[0].temperatureLow + " \u00BAC";
        humidityD0 = DSbody.daily.data[0].humidity;
        windSpeedD0 = DSbody.daily.data[0].windSpeed + "Km/h";
        uvIndexD0 = DSbody.daily.data[0].uvIndex;

        //dia 1

        timeD1 = dia + 1 + "-" + mes;
        summaryD1 = DSbody.daily.data[1].summary;
        iconD1 = DSbody.daily.data[1].icon;
        precipProbabilityD1 = DSbody.daily.data[1].precipProbability;
        temperatureHighD1 = DSbody.daily.data[1].temperatureHigh + " \u00BAC";
        temperatureLowD1 = DSbody.daily.data[1].temperatureLow + " \u00BAC";
        humidityD1 = DSbody.daily.data[1].humidity;
        windSpeedD1 = DSbody.daily.data[1].windSpeed + "Km/h";
        uvIndexD1 = DSbody.daily.data[1].uvIndex;


        //dia 2

        timeD2 = dia + 2 + "-" + mes;
        summaryD2 = DSbody.daily.data[2].summary;
        iconD2 = DSbody.daily.data[2].icon;
        precipProbabilityD2 = DSbody.daily.data[2].precipProbability;
        temperatureHighD2 = DSbody.daily.data[2].temperatureHigh + " \u00BAC";
        temperatureLowD2 = DSbody.daily.data[2].temperatureLow + " \u00BAC";
        humidityD2 = DSbody.daily.data[2].humidity;
        windSpeedD2 = DSbody.daily.data[2].windSpeed + "Km/h";
        uvIndexD2 = DSbody.daily.data[2].uvIndex;


        if (uvIndex <= 2.9) {
          inf = "Baixo"

        } else if (uvIndex >= 3.0 && uvIndex <= 5.9) {
          inf = "Moderado"

        } else if (uvIndex >= 6.0 && uvIndex <= 7.9) {
          inf = "Alto"

        } else if (uvIndex >= 8.0 && uvIndex <= 10.9) {
          inf = "Muito Alto"

        } else if (uvIndex >= 11) {
          inf = "Extremo"

        }

        if (uvIndexH0 <= 2.9) {
          infH0 = "Baixo"

        } else if (uvIndexH0 >= 3.0 && uvIndexH0 <= 5.9) {
          infH0 = "Moderado"

        } else if (uvIndexH0 >= 6.0 && uvIndexH0 <= 7.9) {
          infH0 = "Alto"

        } else if (uvIndexH0 >= 8.0 && uvIndexH0 <= 10.9) {
          infH0 = "Muito Alto"

        } else if (uvIndexH0 >= 11) {
          infH0 = "Extremo"

        }

        if (uvIndexH1 <= 2.9) {
          infH1 = "Baixo"

        } else if (uvIndexH1 >= 3.0 && uvIndexH1 <= 5.9) {
          infH1 = "Moderado"

        } else if (uvIndexH1 >= 6.0 && uvIndexH1 <= 7.9) {
          infH1 = "Alto"

        } else if (uvIndexH1 >= 8.0 && uvIndexH1 <= 10.9) {
          infH1 = "Muito Alto"

        } else if (uvIndexH1 >= 11) {
          infH1 = "Extremo"

        }


        if (uvIndexH2 <= 2.9) {
          infH2 = "Baixo"

        } else if (uvIndexH2 >= 3.0 && uvIndexH2 <= 5.9) {
          infH2 = "Moderado"

        } else if (uvIndexH2 >= 6.0 && uvIndexH2 <= 7.9) {
          infH2 = "Alto"

        } else if (uvIndexH2 >= 8.0 && uvIndexH2 <= 10.9) {
          infH2 = "Muito Alto"

        } else if (uvIndexH2 >= 11) {
          infH2 = "Extremo"

        }

        if (uvIndexH3 <= 2.9) {
          infH3 = "Baixo"

        } else if (uvIndexH3 >= 3.0 && uvIndexH3 <= 5.9) {
          infH3 = "Moderado"

        } else if (uvIndexH3 >= 6.0 && uvIndexH3 <= 7.9) {
          infH3 = "Alto"

        } else if (uvIndexH3 >= 8.0 && uvIndexH3 <= 10.9) {
          infH3 = "Muito Alto"

        } else if (uvIndexH3 >= 11) {
          infH3 = "Extremo"

        }
        if (uvIndexH4 <= 2.9) {
          infH4 = "Baixo"

        } else if (uvIndexH4 >= 3.0 && uvIndexH4 <= 5.9) {
          infH4 = "Moderado"

        } else if (uvIndexH4 >= 6.0 && uvIndexH4 <= 7.9) {
          infH4 = "Alto"

        } else if (uvIndexH4 >= 8.0 && uvIndexH4 <= 10.9) {
          infH4 = "Muito Alto"

        } else if (uvIndexH4 >= 11) {
          infH4 = "Extremo"

        }


        if (uvIndexH5 <= 2.9) {
          infH5 = "Baixo"

        } else if (uvIndexH5 >= 3.0 && uvIndexH5 <= 5.9) {
          infH5 = "Moderado"

        } else if (uvIndexH5 >= 6.0 && uvIndexH5 <= 7.9) {
          infH5 = "Alto"

        } else if (uvIndexH5 >= 8.0 && uvIndexH5 <= 10.9) {
          infH5 = "Muito Alto"

        } else if (uvIndexH5 >= 11) {
          infH5 = "Extremo"

        }

        if (uvIndexH6 <= 2.9) {
          infH6 = "Baixo"

        } else if (uvIndexH6 >= 3.0 && uvIndexH6 <= 5.9) {
          infH6 = "Moderado"

        } else if (uvIndexH6 >= 6.0 && uvIndexH6 <= 7.9) {
          infH6 = "Alto"

        } else if (uvIndexH6 >= 8.0 && uvIndexH6 <= 10.9) {
          infH6 = "Muito Alto"

        } else if (uvIndexH6 >= 11) {
          infH6 = "Extremo"

        }

      });

      res.render('welcome.hbs', {
        title: "World Weather",
        title1: "Now",
        subtitle: formatted_address,
        text1: time,
        text2: summary,
        text3: icon,
        text4: "Precipitation: " + precipProbability + "%",
        text5: "Temperature: " + temperature,
        text6: "Apparent Temperature: " + apparentTemperature,
        text7: "Humidity: " + humidity,
        text8: "Wind Speed: " + windSpeed,
        text9: "UV: " + uvIndex + " " + inf,
        title2: timeH0,
        text10: summary1H0,
        text11: icon1H0,
        text13: iconH0,
        text12: summaryH0,
        text14: "Precipitation: " + precipProbabilityH0,
        text15: "Temperature: " + temperatureH0,
        text16: "Apparent Temperature: " + apparentTemperatureH0,
        text17: "Humidity: " + humidityH0,
        text18: "Wind Speed: " + windSpeedH0,
        text19: "UV: " + uvIndexH0 + " " + infH0,
        title3: timeH1,
        text20: iconH1,
        text21: summaryH1,
        text22: "Precipitation: " + precipProbabilityH1,
        text23: "Temperature: " + temperatureH1,
        text24: "Apparent Temperature: " + apparentTemperatureH1,
        text25: "Humidity: " + humidityH1,
        text26: "Wind Speed: " + windSpeedH1,
        text27: "UV: " + uvIndexH1 + " " + infH1,
        title4: timeH2,
        text30: iconH2,
        text31: summaryH2,
        text32: "Precipitation: " + precipProbabilityH2,
        text33: "Temperature: " + temperatureH2,
        text34: "Apparent Temperature: " + apparentTemperatureH2,
        text35: "Humidity: " + humidityH2,
        text36: "Wind Speed: " + windSpeedH2,
        text37: "UV: " + uvIndexH2 + " " + infH2,
        title5: timeH3,
        text40: iconH3,
        text41: summaryH3,
        text42: "Precipitation: " + precipProbabilityH3,
        text43: "Temperature: " + temperatureH3,
        text44: "Apparent Temperature: " + apparentTemperatureH3,
        text45: "Humidity: " + humidityH3,
        text46: "Wind Speed: " + windSpeedH3,
        text47: "UV: " + uvIndexH3 + " " + infH3,
        title6: timeH4,
        text50: iconH4,
        text51: summaryH4,
        text52: "Precipitation: " + precipProbabilityH4,
        text53: "Temperature: " + temperatureH4,
        text54: "Apparent Temperature: " + apparentTemperatureH4,
        text55: "Humidity: " + humidityH4,
        text56: "Wind Speed: " + windSpeedH4,
        text57: "UV: " + uvIndexH4 + " " + infH4,
        title7: timeH5,
        text60: iconH5,
        text61: summaryH5,
        text62: "Precipitation: " + precipProbabilityH5,
        text63: "Temperature: " + temperatureH5,
        text64: "Apparent Temperature: " + apparentTemperatureH5,
        text65: "Humidity: " + humidityH5,
        text66: "Wind Speed: " + windSpeedH5,
        text67: "UV: " + uvIndexH5 + " " + infH5,
        title8: timeH6,
        text70: iconH6,
        text71: summaryH6,
        text72: "Precipitation: " + precipProbabilityH6,
        text73: "Temperature: " + temperatureH6,
        text74: "Apparent Temperature: " + apparentTemperatureH6,
        text75: "Humidity: " + humidityH6,
        text76: "Wind Speed: " + windSpeedH6,
        text77: "UV: " + uvIndexH6 + " " + infH6,
        title9: "Today",
        text81: icon1D0,
        text82: summaryD0,
        text83: iconD0,
        text84: "Precipitation: " + precipProbabilityD0,
        text85: "temperature high: " + temperatureHighD0,
        text86: "temperature low: " + temperatureLowD0,
        text87: "Humidity: " + humidityD0,
        text88: "Wind Speed: " + windSpeedD0,
        text89: "UV: " + uvIndexD0,
        title10: timeD1,
        text90: summaryD1,
        text91: iconD1,
        text92: "Precipitation: " + precipProbabilityD1,
        text93: "temperature high: " + temperatureHighD1,
        text94: "temperature low: " + temperatureLowD1,
        text95: "Humidity: " + humidityD1,
        text96: "Wind Speed: " + windSpeedD1,
        text97: "UV: " + uvIndexD1,
        title11: timeD2,
        text100: summaryD2,
        text101: iconD2,
        text102: "Precipitation: " + precipProbabilityD2,
        text103: "temperature high: " + temperatureHighD2,
        text104: "temperature low: " + temperatureLowD2,
        text105: "Humidity: " + humidityD2,
        text106: "Wind Speed: " + windSpeedD2,
        text107: "UV: " + uvIndexD2,





      });
    }
    catch (err) {
      res.render('welcome.hbs', {

        text1: "O endereço que escreveu é invalido",
      })
    }

  });

});



app.listen(3500);

