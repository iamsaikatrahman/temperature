document.getElementById('city-not-found').style.display = 'none';
const fetchWeather = async () =>{
    const searchField = document.getElementById('search-field');
    const restultContainer = document.getElementById('search-result');
    (searchField.value == '')? cityName = 'Dhaka' : cityName = searchField.value;
    searchField.value = '';
    restultContainer.textContent = '';
    document.getElementById('city-not-found').style.display = 'none';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${config.apiKey}`;
    try{
    const res = await fetch(url);
    const data = await res.json();
    displayWeater(data);
    } catch(error){
        console.log(error);
    }
    
}

fetchWeather();

const displayWeater = data => {
    if(data.cod != 200){
        document.getElementById('city-not-found').style.display = 'block';
    } else{
        const restultContainer = document.getElementById('search-result');
        restultContainer.textContent = '';
        const div = document.createElement('div');
        div.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        <h1>${data.name}</h1>
        <h3><span>${Math.round(data.main.temp)}</span>&deg;C</h3>
        <h1 class="lead">${data.weather[0].main}</h1>
        `;
        restultContainer.appendChild(div);
    }

}