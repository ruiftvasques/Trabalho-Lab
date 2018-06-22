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

// adereço apartir do terminal
//const argv=yargs.argv;   
//const address;

var temp;
var appTemp;
var dewPoint;
var humidity;
var precipType;
var precipIntensity;
var precipIntensityError;
var windSpeed;
var visibility;
var windGust;

//objetos
       app.get('/weather',(req, res)=>{
        var pedido = req.query.local;

        var encodedAdress= encodeURIComponent(pedido);

        request({url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}&key=${GoogleKey}`,
        json: true},(error,response,body) => {
                var lat=body.results[0].geometry.location.lat;
                var lng=body.results[0].geometry.location.lng;
                var formatted_address= body.results[0].formatted_address;
                console.log("latitude:"+lat);
                console.log("longitude:"+lng);
                console.log("A morada é " +formatted_address);
        
                request({url:`https://api.darksky.net/forecast/${darksky}/${lat},${lng}?units=si`,json: true
              },(DSerror,DSresponse,DSbody) => {
                console.log(body);
                  temp=DSbody.currently.temperature;
                  appTemp=DSbody.currently.apparentTemperature;
                  dewPoint=DSbody.currently.dewPoint;
                  humidity=DSbody.currently.humidity;
                  precipType=DSbody.currently.precipType;
                  precipIntensity=DSbody.currently.precipIntensity;
                  precipIntensityError=DSbody.currently.precipIntensityError;
                  windSpeed=DSbody.currently.windSpeed;
                  visibility=DSbody.currently.visibility;
                  windGust=DSbody.currently.windGust;
        
                 //precipMinIntensity =DSbody.minutely.data.precipIntensity;
        
                  console.log("Temperatura: "+temp);
                  console.log("Tema: "+appTemp);
                  console.log("Tema: "+dewPoint);
                  console.log("Tema: "+humidity);
                  console.log("Tema: "+ precipType);
        
                 
                 });
        
               });


        res.render('welcome.hbs',{
            title:"Meteorologia",
            text1:"A temperatura hoje é:"+temp,
            text2:"A temperatura neste momento é:"+appTemp,
            text3:"A humidade é:"+humidity,
            text4:"A intensidade da chuva é:"+precipIntensity,
            text5:"O erro na intensidade da chuva é:"+precipIntensityError,
            text6:"A velocidade do vento é:"+windSpeed,
            text7:"hoje vai estar:"+ precipType,
            
        });
        
        });

        app.get('/',(request, response)=>{
          response.render("welcome.hbs");
          
         });


      /*app.get('/',(request, response)=>{
       response.render("welcome.hbs",{texto:request.query.local})
      });*/

        app.listen(3500);

