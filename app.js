// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '601d2d2e6fmsh699cbf8f9dd0515p138abejsn14f51f888ef4',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

const getWeather=(city)=>{
    cityName.innerHTML=city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
    .then(response=>response.json())
    .then((response)=>{
        console.log(response)
        
        // cloud_pct.innerHTML=response.cloud_pct 
        temp.innerHTML=response.temp 
        temp2.innerHTML=response.temp 

        feels_like.innerHTML=response.feels_like 

        humidity.innerHTML=response.humidity 
        humidity2.innerHTML=response.humidity 
        min_temp.innerHTML=response.min_temp 
        max_temp.innerHTML=response.max_temp 
        wind_speed.innerHTML=response.wind_speed
        wind_speed2.innerHTML=response.wind_speed
        wind_degree.innerHTML= response.wind_degrees
        sunrise.innerHTML= response.sunrise
        sunset.innerHTML=response.sunset

    })
    .catch(err=>console.error(err));
}

submit.addEventListener("click",(e)=>{
e.preventDefault();
getWeather(city.value)
})


const shanghai=()=>{

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai',options)
    .then(response=>response.json())
    .then((response)=>{
        console.log(response)        
        temp3.innerHTML=response.temp 
        humidity3.innerHTML=response.humidity
        min_temp3.innerHTML=response.min_temp 
        max_temp3.innerHTML=response.max_temp 
        wind_speed3.innerHTML=response.wind_speed
    })
    .catch(err=>console.error(err));
}

shanghai()

const boston=()=>{

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston',options)
    .then(response=>response.json())
    .then((response)=>{
        console.log(response)        
        temp4.innerHTML=response.temp 
        humidity4.innerHTML=response.humidity
        min_temp4.innerHTML=response.min_temp 
        max_temp4.innerHTML=response.max_temp 
        wind_speed4.innerHTML=response.wind_speed
    })
    .catch(err=>console.error(err));
}

boston()

const lucknow=()=>{

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow',options)
    .then(response=>response.json())
    .then((response)=>{
        console.log(response)        
        temp5.innerHTML=response.temp 
        humidity5.innerHTML=response.humidity
        min_temp5.innerHTML=response.min_temp 
        max_temp5.innerHTML=response.max_temp 
        wind_speed5.innerHTML=response.wind_speed
    })
    .catch(err=>console.error(err));
}

lucknow()

const kolkata=()=>{

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata',options)
    .then(response=>response.json())
    .then((response)=>{
        console.log(response)        
        temp6.innerHTML=response.temp 
        humidity6.innerHTML=response.humidity
        min_temp6.innerHTML=response.min_temp 
        max_temp6.innerHTML=response.max_temp 
        wind_speed6.innerHTML=response.wind_speed
    })
    .catch(err=>console.error(err));
}

kolkata()

const main33=document.getElementById('main33');
const container3=document.getElementById('container3');
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    main33.style.display="block";
    container3.style.display="none";

})
