
function fetchWeather(city){
    const weatherUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid={appID}`
    fetch(weatherUrl)
    .then(response => {
        return response.json()
    })
    .then(data => {
        const container=document.querySelector('#mainDiv')
        let weatherStr="<div id='weather'>"
        for (const key in data.main) {
           weatherStr+=`<h2>${key.replace('_'," ")} : ${data.main[key]}</h2>`
        }
        weatherStr+='</div>'
        console.log(weatherStr)
        container.innerHTML= weatherStr
       
    })
    .catch(error=>{
        console.log(error);
    })
}
function weatherSend(){
    fetchWeather(document.getElementById('weatherCity').value)
    weatherBtnElem.removeEventListener('click',weatherSend)
    weatherBtnElem.disabled=true;
    document.getElementById('weatherCity').disabled=true;

}


const weatherBtnElem=document.getElementById('weatherBtn')
weatherBtnElem.addEventListener('click',weatherSend)