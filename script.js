document.getElementById("get-weather").addEventListener("click", function(){
    const location = document.getElementById("location").value;
    const apikey = "42e403d5e05b4a3c97b140901232410";
    const apiUrl =`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${location}&api=no`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById("weather-info");
        weatherInfo.innerHTML =`
       <h2>Weather in ${data.location.name}, ${data.location.country}</h2>
        <p>Temperature: ${data.current.temp_c}C</p>
        <p>Condition: ${data.current.condition.text}</p>
        <img src="${data.current.condition.icon}" alt="Weather Icon">`;
    })
    .catch (error=>{
        console.log("Error in Fetch")
    });
});