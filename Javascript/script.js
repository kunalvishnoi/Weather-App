var n = new Date();   
        var h = n.getHours();
        

 


if(h<17&&h>6)
{
document.getElementById("jumbo").style.backgroundImage = "url('Assests/day.jpg')";
document.getElementById("jumbo").style.backgroundRepeat = "no-repeat";
document.getElementById("jumbo").style.backgroundSize = "cover";
document.getElementById("jumbo").style.color="black;"
}
else{
  document.getElementById("jumbo").style.backgroundImage = "url('Assests/night.jpg')";
document.getElementById("jumbo").style.backgroundRepeat = "no-repeat";
document.getElementById("jumbo").style.backgroundSize = "cover";
document.getElementById("jumbo").style.color="white";

  
}
          function myFunction() {

            var location=document.getElementById("city").value;
            var url = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json';
            var request = new XMLHttpRequest();
            request.onreadystatechange = function(){
              if(request.readyState==4) {
                var data = JSON.parse(request.responseText);
                var x=data.query.results.channel.item.condition.temp;
                     x=(5*(x-32))/9;
                var y=data.query.results.channel.wind.speed;  
                 var z=data.query.results.channel.atmosphere.humidity; 
                document.getElementById("temp").innerHTML = 'Temperature:' +  Math.floor(x) + '&deg;'+'C';
                document.getElementById("wind").innerHTML = 'Wind:' +  y +' mph';
                 document.getElementById("humidity").innerHTML = 'Humidity:' +  z +'%';

              }
            } 
            request.open('GET', url, true);
            request.send();
            return false;
          }
    
