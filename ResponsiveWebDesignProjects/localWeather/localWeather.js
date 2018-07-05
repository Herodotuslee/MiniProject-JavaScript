
$(document).ready(function() {
 var lat;
 var long;
 var api;
 var cTemp;
 var fTemp;
 var tempSwap=false;

  
    if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    
    lat =position.coords.latitude
    long=position.coords.longitude
    // api='https://fcc-weather-api.glitch.me/api/current?lat='+lat+'&lon='+long+'&units=imperial&appid=06986e2720ce0175dc6f87d8b897dffdf';
    
    api= "https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+long; 
    $.getJSON(api,function(data){
         var city= data.name
         var windSpeed=data.wind.speed
         var cTemp=data.main.temp;
         var weatherDescribe =data.weather[0].description
         // fTemp=(kTemp)*(9/5)-459.67;
         // cTemp=kTemp-273;
         fTemp=(cTemp*(9/5)+32).toFixed(1);
      // $("#api").html(api)
       
        if(cTemp>40){
          $(".square").css('background-image',"url(http://clipartix.com/wp-content/uploads/2016/04/Sunshine-happy-sun-clipart-3.gif)")
                              }
        else if(cTemp<=40){
          $(".square").css('background-image',"url(https://thumbs.dreamstime.com/b/kawaii-cartoon-white-emoticon-cute-cloud-vector-illustration-96217519.jpg)")
                              };

 
      $("#city").html(city);
      $("#cTemp").html(cTemp+"&#8451");
      $("#windSpeed").html(windSpeed);
      $("#weatherDescribe").html(weatherDescribe);
      $("#cTemp").click(function(){
        if(tempSwap===false){
           $("#cTemp").html(cTemp+"&#8451");
          tempSwap=true;
        }
        else{
          $("#cTemp").html(fTemp+"&#x2109");
          tempSwap=false;
        }
        
   
      
        
      });
        
      
  });
});
                                           };
    
  

 
  
});
  
  
      
