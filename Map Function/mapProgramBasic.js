//Create a array.

const cityName = ["Baroda","Rajkot","Surat"];

const city = cityName.map(function(value){
    return "<li>" + value + "</li>";
})

document.getElementById("display").innerHTML = city.join(" ");