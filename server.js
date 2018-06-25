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
//var inf;
//endereço usado
var formatted_address;

//horas
var dia= new Date().getDay();
var mes= new Date().getMonth();
var horas=new Date().getHours();
var min=new Date().getMinutes();
var seg=new Date().getSeconds();


//objetos
       app.get('/',(req, res)=>{
        var pedido = req.query.local;

        var encodedAdress= encodeURIComponent(pedido);

        request({url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}&key=${GoogleKey}`,
        json: true},(error,response,body) => {


          try { 
          var lat=body.results[0].geometry.location.lat;
          var lng=body.results[0].geometry.location.lng;
            
        
                        
                formatted_address= body.results[0].formatted_address;
                console.log("latitude:"+lat);
                console.log("longitude:"+lng);
                console.log("A morada é " +formatted_address);
        
                request({url:`https://api.darksky.net/forecast/${darksky}/${lat},${lng}?units=si`,json: true
              },(DSerror,DSresponse,DSbody) => {
                console.log(body);

                  time =horas+":" + min;
                  summary=DSbody.currently.summary;
                  icon=DSbody.currently.icon
                  precipProbability=DSbody.currently.precipProbability;
                  temperature=DSbody.currently.temperature;
                  apparentTemperature=DSbody.currently.apparentTemperature;
                  humidity=DSbody.currently.humidity;
                  windSpeed=DSbody.currently.windSpeed;
                  uvIndex=DSbody.currently.uvIndex;
                 /*  if(uvIndex<3){

                  inf="Low";

                  }else if(uvIndex>3 && uvIndex<6){

                    inf="Moderate";
  
                    }else if(uvIndex>6 && uvIndex<11){

                      inf="Very high";
        
                    } */
                //hora atual
                  summary1H0=DSbody.hourly.summary;
                  icon1H0=DSbody.hourly.icon;
                  timeH0=horas+"H" ;
                  summaryH0=DSbody.hourly.data[0].summary;
                  iconH0=DSbody.hourly.data[0].icon;
                  precipProbabilityH0=DSbody.hourly.data[0].precipProbability;
                  temperatureH0=DSbody.hourly.data[0].temperature;
                  apparentTemperatureH0=DSbody.hourly.data[0].apparentTemperature;
                  humidityH0=DSbody.hourly.data[0].humidity;
                  windSpeedH0=DSbody.hourly.data[0].windSpeed;
                  uvIndexH0=DSbody.hourly.data[0].uvIndex;

                     //hora 1
                     timeH1=horas +1 +"H" ;
                     summaryH1=DSbody.hourly.data[1].summary;
                     iconH1=DSbody.hourly.data[1].icon;
                     precipProbabilityH1=DSbody.hourly.data[1].precipProbability;
                     temperatureH1=DSbody.hourly.data[1].temperature;
                     apparentTemperatureH1=DSbody.hourly.data[1].apparentTemperature;
                     humidityH1=DSbody.hourly.data[1].humidity;
                     windSpeedH1=DSbody.hourly.data[1].windSpeed;
                     uvIndexH1=DSbody.hourly.data[1].uvIndex;

                     //hora 2
                     timeH2=horas +2 +"H" ;
                     summaryH2=DSbody.hourly.data[2].summary;
                     iconH2=DSbody.hourly.data[2].icon;
                     precipProbabilityH2=DSbody.hourly.data[2].precipProbability;
                     temperatureH2=DSbody.hourly.data[2].temperature;
                     apparentTemperatureH2=DSbody.hourly.data[2].apparentTemperature;
                     humidityH2=DSbody.hourly.data[2].humidity;
                     windSpeedH2=DSbody.hourly.data[2].windSpeed;
                     uvIndexH2=DSbody.hourly.data[2].uvIndex;


                     //hora 3
                     timeH3=horas +3 +"H" ;
                     summaryH3=DSbody.hourly.data[3].summary;
                     iconH3=DSbody.hourly.data[3].icon;
                     precipProbabilityH3=DSbody.hourly.data[3].precipProbability;
                     temperatureH3=DSbody.hourly.data[3].temperature;
                     apparentTemperatureH3=DSbody.hourly.data[3].apparentTemperature;
                     humidityH3=DSbody.hourly.data[3].humidity;
                     windSpeedH3=DSbody.hourly.data[3].windSpeed;
                     uvIndexH3=DSbody.hourly.data[3].uvIndex;

                      //hora 4
                      timeH4=horas +4 +"H" ;
                      summaryH4=DSbody.hourly.data[4].summary;
                      iconH4=DSbody.hourly.data[4].icon;
                      precipProbabilityH4=DSbody.hourly.data[4].precipProbability;
                      temperatureH3=DSbody.hourly.data[4].temperature;
                      apparentTemperatureH3=DSbody.hourly.data[4].apparentTemperature;
                      humidityH3=DSbody.hourly.data[4].humidity;
                      windSpeedH3=DSbody.hourly.data[4].windSpeed;
                      uvIndexH3=DSbody.hourly.data[4].uvIndex;

                       //hora 5
                     timeH5=horas +5 +"H" ;
                     summaryH5=DSbody.hourly.data[5].summary;
                     iconH5=DSbody.hourly.data[5].icon;
                     precipProbabilityH5=DSbody.hourly.data[5].precipProbability;
                     temperatureH5=DSbody.hourly.data[5].temperature;
                     apparentTemperatureH5=DSbody.hourly.data[5].apparentTemperature;
                     humidityH5=DSbody.hourly.data[5].humidity;
                     windSpeedH5=DSbody.hourly.data[5].windSpeed;
                     uvIndexH5=DSbody.hourly.data[5].uvIndex;


                      //hora 6
                      timeH6=horas +6 +"H" ;
                      summaryH6=DSbody.hourly.data[6].summary;
                      iconH6=DSbody.hourly.data[6].icon;
                      precipProbabilityH6=DSbody.hourly.data[6].precipProbability;
                      temperatureH6=DSbody.hourly.data[6].temperature;
                      apparentTemperatureH6=DSbody.hourly.data[6].apparentTemperature;
                      humidityH6=DSbody.hourly.data[6].humidity;
                      windSpeedH6=DSbody.hourly.data[6].windSpeed;
                      uvIndexH6=DSbody.hourly.data[6].uvIndex;


                  //dia ataul
                  //timeD0=dia + "-"+ mes;
                  summary1D0=DSbody.daily.summary;
                  icon1D0=DSbody.daily.icon;
                  summaryD0=DSbody.daily.data[0].summary;
                  iconD0=DSbody.daily.data[0].icon;
                  precipProbabilityD0=DSbody.daily.data[0].precipProbability;
                  temperatureHighD0=DSbody.daily.data[0].temperatureHigh;
                  temperatureLowD0=DSbody.daily.data[0].temperatureLow;
                  humidityD0=DSbody.daily.data[0].humidity;
                  windSpeedD0=DSbody.daily.data[0].windSpeed;
                  uvIndexD0=DSbody.daily.data[0].uvIndex;

                   //dia 1
                   
                   
                   summaryD1=DSbody.daily.data[1].summary;
                   iconD1=DSbody.daily.data[1].icon;
                   precipProbabilityD1=DSbody.daily.data[1].precipProbability;
                   temperatureHighD1=DSbody.daily.data[1].temperatureHigh;
                   temperatureLowD1=DSbody.daily.data[1].temperatureLow;
                   humidityD1=DSbody.daily.data[1].humidity;
                   windSpeedD1=DSbody.daily.data[1].windSpeed;
                   uvIndexD1=DSbody.daily.data[1].uvIndex;


                   //dia 2
                   
                   timeD2=dia + 2+ "-"+ mes;
                   summaryD2=DSbody.daily.data[2].summary;
                   iconD2=DSbody.daily.data[2].icon;
                   precipProbabilityD2=DSbody.daily.data[2].precipProbability;
                   temperatureHighD2=DSbody.daily.data[2].temperatureHigh;
                   temperatureLowD2=DSbody.daily.data[2].temperatureLow;
                   humidityD2=DSbody.daily.data[2].humidity;
                   windSpeedD2=DSbody.daily.data[2].windSpeed;
                   uvIndexD2=DSbody.daily.data[2].uvIndex;
                   
                  
        
                 
                 });
        


                 res.render('welcome.hbs',{
                  title1:"Atual",
                  subtitle:"formatted_address: "+formatted_address,
                  text1:"time: "+time,
                  text2:"summary: "+summary,
                  text3:"icon: "+ icon,
                  text4:"precipProbability: "+precipProbability,
                  text5:"temperature: "+ temperature,
                  text6:"apparentTemperature: "+apparentTemperature,
                  text7:"humidity: "+humidity,
                  text8:"windSpeed: "+windSpeed,
                  text9:"uvIndex:"+uvIndex ,
                  title2:"time: "+timeH0,
                  text10:"summary: "+summary1H0,
                  text11:"icon: "+icon1H0,
                  text13:"icon: "+iconH0,
                  text12:"summary: "+summaryH0,
                  text14:"precipProbability: "+ precipProbabilityH0,
                  text15:"temperature: "+ temperatureH0,
                  text16:"apparentTemperature :"+apparentTemperatureH0,
                  text17:"humidity: "+humidityH0,
                  text18:"windSpeed: "+windSpeedH0,
                  text19:"uvIndex: "+uvIndexH0,
                  title3:"time: "+timeH1,
                  text20:"icon: "+iconH1,
                  text21:"summary: "+summaryH1,
                  text22:"precipProbability: "+ precipProbabilityH1,
                  text23:"temperature: "+ temperatureH1,
                  text24:"apparentTemperature :"+apparentTemperatureH1,
                  text25:"humidity: "+humidityH1,
                  text26:"windSpeed: "+windSpeedH1,
                  text27:"uvIndex: "+uvIndexH1,
                  title4:"time: "+timeH2,
                  text30:"icon: "+iconH2,
                  text31:"summary: "+summaryH2,
                  text32:"precipProbability: "+ precipProbabilityH2,
                  text33:"temperature: "+ temperatureH2,
                  text34:"apparentTemperature :"+apparentTemperatureH2,
                  text35:"humidity: "+humidityH2,
                  text36:"windSpeed: "+windSpeedH2,
                  text37:"uvIndex: "+uvIndexH2,
                  title5:"time: "+timeH3,
                  text40:"icon: "+iconH3,
                  text41:"summary: "+summaryH3,
                  text42:"precipProbability: "+ precipProbabilityH3,
                  text43:"temperature: "+ temperatureH3,
                  text44:"apparentTemperature :"+apparentTemperatureH3,
                  text45:"humidity: "+humidityH3,
                  text46:"windSpeed: "+windSpeedH3,
                  text47:"uvIndex: "+uvIndexH3,
                  title6:"time: "+timeH4,
                  text50:"icon: "+iconH4,
                  text51:"summary: "+summaryH4,
                  text52:"precipProbability: "+ precipProbabilityH4,
                  text53:"temperature: "+ temperatureH4,
                  text54:"apparentTemperature :"+apparentTemperatureH4,
                  text55:"humidity: "+humidityH4,
                  text56:"windSpeed: "+windSpeedH4,
                  text57:"uvIndex: "+uvIndexH4,
                  title7:"time: "+timeH5,
                  text60:"icon: "+iconH5,
                  text61:"summary: "+summaryH5,
                  text62:"precipProbability: "+ precipProbabilityH5,
                  text63:"temperature: "+ temperatureH5,
                  text64:"apparentTemperature :"+apparentTemperatureH5,
                  text65:"humidity: "+humidityH5,
                  text66:"windSpeed: "+windSpeedH5,
                  text67:"uvIndex: "+uvIndexH5,
                  title8:"time: "+timeH6,
                  text70:"icon: "+iconH6,
                  text71:"summary: "+summaryH6,
                  text72:"precipProbability: "+ precipProbabilityH6,
                  text73:"temperature: "+ temperatureH6,
                  text74:"apparentTemperature :"+apparentTemperatureH6,
                  text75:"humidity: "+humidityH6,
                  text76:"windSpeed: "+windSpeedH6,
                  text77:"uvIndex: "+uvIndexH6,
                  title9:"dia atual",
                  text80:"summary: "+summary1D0,
                  text81:"icon: "+icon1D0,
                  text82:"summary: "+summaryD0,
                  text83:"icon: "+iconD0,
                  text84:"precipProbability: "+ precipProbabilityD0,
                  text85:"temperature high: "+ temperatureHighD0,
                  text86:"temperature low: "+ temperatureLowD0,
                  text87:"humidity: "+humidityD0,
                  text88:"windSpeed: "+windSpeedD0,
                  text89:"uvIndex: "+uvIndexD0, 
                  title10: timeD1,
                  text90:"summary: "+summaryD1,
                  text91:"icon: "+iconD1,
                  text92:"precipProbability: "+ precipProbabilityD1,
                  text93:"temperature high: "+ temperatureHighD1,
                  text94:"temperature low: "+ temperatureLowD1,
                  text95:"humidity: "+humidityD1,
                  text96:"windSpeed: "+windSpeedD1,
                  text97:"uvIndex: "+uvIndexD1,
                  title11: timeD2,
                  text100:"summary: "+summaryD2,
                  text101:"icon: "+iconD2,
                  text102:"precipProbability: "+ precipProbabilityD2,
                  text103:"temperature high: "+ temperatureHighD2,
                  text104:"temperature low: "+ temperatureLowD2,
                  text105:"humidity: "+humidityD2,
                  text106:"windSpeed: "+windSpeedD2,
                  text107:"uvIndex: "+uvIndexD2, 
             
                  
                  
      
        
              
              });

            }
            catch(err) {
              res.render('welcome.hbs',{
    
                text1:"O endereço que escreveu é invalido",
              })
            }
              
               });


       
        
        });


        app.listen(3500);

