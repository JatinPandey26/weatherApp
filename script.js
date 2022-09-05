let tempDiv = document.getElementById("tempDiv");
let locationDiv = document.getElementById("location");
let timeDate = document.getElementById("timeDate");
let weatherIcon = document.getElementById("weatherIcon");
let weatherTitle = document.getElementById("weatherTitle");
let locationInput = document.querySelector('#selectLocationDiv input');
let searchBtn = document.getElementById('searchBtn');
let body = document.querySelector('body');


const baseURL = "http://api.weatherapi.com/v1/current.json?key=";
const key = "d4e527ea83cb46e386965003220509";

let city = "london";

async function fetchDataFromWeatherApi(city) {
  await fetch(`${baseURL}${key}&q=${city}`)
    .then((response) => {
      return response.json();
    })
    .then((dataObject) => {
      let { current : {temp_c , condition:{text,icon}} , location : {name , localtime} } = dataObject;
      tempDiv.innerText = temp_c;
      locationDiv.innerText = name;
      timeDate.innerText = localtime;
      weatherIcon.style.backgroundImage = `url(${icon})`;
      weatherTitle.innerText = text;

      if(text.includes('Sunny') || text.includes('sunny')){
        body.style.backgroundImage = `url(./images/sunny.jpg)`
      }
      else if(text.includes('Mist') || text.includes('mist')){
        body.style.backgroundImage = `url(./images/mist.jpg)`
      }
      else if(text.includes('Rain') || text.includes('rain')){
        body.style.backgroundImage = `url(./images/rain.jpg)`
      }
      else if(text.includes('Cloudy') || text.includes('cloudy')){
        body.style.backgroundImage = `url(./images/cloudy.jpg)`
      }
      else if(text.includes('Winter') || text.includes('winter')){
        body.style.backgroundImage = `url(./images/winter.jpg)`
      }
      else if(text.includes('Clear') || text.includes('clear')){
        body.style.backgroundImage = `url(./images/clear.jpg)`
      }
      

    });
}
fetchDataFromWeatherApi('delhi')
searchBtn.addEventListener('click',()=>{

  let location = locationInput.value;
  fetchDataFromWeatherApi(location);
  
})

