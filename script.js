const btn = document.getElementById('btn')

const key = 'a2fc0f9a22097d7a1edfc11fdf72c88f'



const showDisplay = (data) => {
    console.log(data)
    document.querySelector('.city').innerHTML = `Tempo em ${data.name}`
    document.querySelector('.temperature').innerHTML = `${Math.floor(data.main.temp)}°C`
    document.querySelector('.description').innerHTML = `${data.weather[0].description}`
    document.querySelector('.moisture').innerHTML = `Umidade: ${data.main.humidity}%`
    document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

const searchCity = async (inputCity) => {
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${key}&lang=pt_br&units=metric`)
    .then(response => response.json())
    

    showDisplay(data)
}



const button = () => {
    let inputCity = document.querySelector('.input-city').value

    searchCity(inputCity)
}
btn.addEventListener('click', button)