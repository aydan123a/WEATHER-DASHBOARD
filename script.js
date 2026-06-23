let weatherData=[
{
city:"Baku",
temp:25,
condition:"sunny"
},
{
city:"London",
temp:15,
condition:"rain"
},
{
city:"Paris",
temp:20,
condition:"cloudy"
}
];


function showWeather(){

let city=document.getElementById("city").value;

let data=weatherData.find(item=>item.city==city);


document.getElementById("weather").innerHTML=`

<div class="card">

<h2>${data.city}</h2>

<h3>${data.temp}°C</h3>

<p>${data.condition}</p>

</div>

`;


changeBackground(data.condition);

}


function changeBackground(condition){

if(condition=="sunny"){
document.body.style.background="#ffd54f";
}

else if(condition=="rain"){
document.body.style.background="#607d8b";
}

else if(condition=="cloudy"){
document.body.style.background="#bdbdbd";
}

}


showWeather();
