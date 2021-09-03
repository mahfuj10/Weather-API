
const getWether = () => {

const searchInput = document.getElementById('search-input');
const api_key = `24e7ecfdf19dd7045fa2ebda2bf62682`
const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${api_key}&units=metric`;

fetch(url)
.then(res => res.json())
.then(data => displayWeather(data))

searchInput.value = '';
}

const setInnerText = (id,text) => {
    document.getElementById(id).innerText = text;
}


const displayWeather = (data) => {
    setInnerText('city-name',data.name);
    setInnerText('temp',data.main.temp);
    setInnerText('condition',data.weather[0].main);
    // image icon
    const url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src',url)
}

