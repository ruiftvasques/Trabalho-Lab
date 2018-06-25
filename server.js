//modulos
const request=require('request');
const yargs=require('yargs');
const hbs=require('hbs');
const express=require('express');
//instancia biblioteca express
const app= express();
app.use(express.static(__dirname+"/public"));
app.set("view engine","hbs");
//chaves
var darksky="699202146ac273eefb16cbf1b0792f6d";
var GoogleKey="AIzaSyBlwJ-REINoderL06w26S_bcozh_83KFLc";

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

//endereço usado
var formatted_address;


//objetos
       app.get('/',(req, res)=>{
        var pedido = req.query.local;

        var encodedAdress= encodeURIComponent(pedido);

        request({url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}&key=${GoogleKey}`,
        json: true},(error,response,body) => {
                if(body.results[0].geometry.location.lat==undefined && body.results[0].geometry.location.lng==undefined){
                    console.log("rro");
                }else{
                var lat=body.results[0].geometry.location.lat;
                var lng=body.results[0].geometry.location.lng;
              }
                formatted_address= body.results[0].formatted_address;
                console.log("latitude:"+lat);
                console.log("longitude:"+lng);
                console.log("A morada é " +formatted_address);
        
                request({url:`https://api.darksky.net/forecast/${darksky}/${lat},${lng}?units=si`,json: true
              },(DSerror,DSresponse,DSbody) => {
                console.log(body);
                  time=DSbody.currently.time;
                  summary=DSbody.currently.summary;
                  icon=DSbody.currently.icon
                  precipProbability=DSbody.currently.precipProbability;
                  temperature=DSbody.currently.temperature;
                  apparentTemperature=DSbody.currently.apparentTemperature;
                  humidity=DSbody.currently.humidity;
                  windSpeed=DSbody.currently.windSpeed;
                  uvIndex=DSbody.currently.uvIndex;
                  
        

                //hora atual
                  summary1H0=DSbody.hourly.summary;
                  icon1H0=DSbody.hourly.icon;
                  timeH0=DSbody.hourly.data[0].time;
                  summaryH0=DSbody.hourly.data[0].summary;
                  iconH0=DSbody.hourly.data[0].icon;
                  precipProbabilityH0=DSbody.hourly.data[0].precipProbability;
                  temperatureH0=DSbody.hourly.data[0].temperature;
                  apparentTemperatureH0=DSbody.hourly.data[0].apparentTemperature;
                  humidityH0=DSbody.hourly.data[0].humidity;
                  windSpeedH0=DSbody.hourly.data[0].windSpeed;
                  uvIndexH0=DSbody.hourly.data[0].uvIndex;



                  //dia ataul
                  summary1D0=DSbody.daily.summary;
                  icon1D0=DSbody.daily.icon;
                  timeD0=DSbody.daily.data[0].time;
                  summaryD0=DSbody.daily.data[0].summary;
                  IconD0=DSbody.daily.data[0].icon;
                  precipProbabilityD0=DSbody.daily.data[0].precipProbability;
                  temperatureHighD0=DSbody.daily.data[0].temperatureHigh;
                  temperatureLowD0=DSbody.daily.data[0].temperatureLow;
                  humidityD0=DSbody.daily.data[0].humidity;
                  windSpeedD0=DSbody.daily.data[0].windSpeed;
                  uvIndexD0=DSbody.daily.data[0].uvIndex;
                  
        
                 
                 });
        
               


        res.render('welcome.hbs',{
            title:"World Weather",
            title1:"Atual",
            subtitle:"Address: "+formatted_address,
            text1:"time: "+time,
            text2:summary,
            text3:"icon: "+ icon,
            text4:"precipProbability: "+precipProbability,
            text5: temperature,
            text6:"apparentTemperature: "+apparentTemperature,
            text7:"humidity: "+humidity,
            text8:"windSpeed: "+windSpeed,
            text9:"uvIndex:"+uvIndex,
            title2:"hora atual",
            text10:"summary: "+summary1H0,
            text11:"icon: "+icon1H0,
            text12:"time: "+timeH0,
            text13:"summary: "+summaryH0,
            text14:"precipProbability: "+ precipProbabilityH0,
            text15:"temperature: "+ temperatureH0,
            text16:"apparentTemperature :"+apparentTemperatureH0,
            text17:"humidity: "+humidityH0,
            text18:"windSpeed: "+windSpeedH0,
            text19:"uvIndex: "+uvIndexH0,
            title3:"dia atual",
            text20:"summary: "+summary1D0,
            text21:"icon: "+icon1D0,
            text22:"time: "+timeD0,
            text23:"summary: "+summaryD0,
            text24:"precipProbability: "+ precipProbabilityD0,
            text25:"temperature high: "+ temperatureHighD0,
            text26:"temperature low: "+ temperatureLowD0,
            text27:"humidity: "+humidityD0,
            text28:"windSpeed: "+windSpeedD0,
            text29:"uvIndex: "+uvIndexD0,
            
            
            

          });
            
        });
        
        });
      


        app.listen(3500);

