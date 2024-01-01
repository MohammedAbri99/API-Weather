
let temp = document.querySelector(".temperature");
let month = document.querySelector(".month");
let day = document.querySelector(".day");



async function GetAllMovies() {
    // Fetch Weather data from the API
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=23.588&longitude=58.3829&hourly=temperature_2m&forecast_days=1");
    
    // Convert the response to JSON format
    const data = await response.json();
    const d = new Date();
    let hour = d.toString().split(" ")[4].split(":")[0];
    month.innerHTML = d.toString().split(" ")[1];
    day.innerHTML = d.toString().split(" ")[2]
    console.log(hour);
    console.log(data.hourly.temperature_2m[hour]);
    temp.innerHTML = hour+'&deg;'
}
GetAllMovies();