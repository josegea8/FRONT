//Instances
const frame1 = document.querySelector('#frame');
const form = document.querySelector('.get-weather');
const nameCity = document.querySelector('#cityInput');
const nameCountry = document.querySelector('#country');

form.addEventListener('submit',(e) => {
    e.preventDefault();

    //Validations
    if (nameCity.value === '' || nameCountry.value === '') {
        showAlert('Campos Incompletos!!','error');
        return;
    }else{
        callAPI(nameCity.value,nameCountry.value);
    }

})

function showAlert(message,type) {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false,
       
      });
      Toast.fire({
        icon: type,
        title: message
      });
}

function callAPI(city,country){
    const apiId = '43c393488dea0bccd546bd45e01b07fc';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}`;
    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {

            if (data.cod === '404'){
                showAlert('Ciudad no encontrada','warning');
            }else{
                showAlert('Realizado con exito','success');
                clearHtml();
                showWeather(data);
            }

            //Show all json data
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
}


function showWeather(data){
    //Obtenemos los atributos dentro de "data", arrays etc
    //Desestructuracion 

    const {name, main:{temp, temp_min, temp_max}, weather:[arr]} = data;
    
    //Convert temp Kelvin to Centrig.
    const degrees = kelvinToCentigrade(temp);
    const min = kelvinToCentigrade(temp_min);
    const max = kelvinToCentigrade(temp_max);
    

    const content = document.createElement('div');
    content.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="icon">
    <p id="city">Clima en ${name}</p>
    <div class="tempBox">
        <p id="temp">${degrees}ºC</p>
        <p id="temp1">max: ${max}º</p>
        <p id="temp1">min: ${min}º</p>
    </div> 
    `;

    frame1.appendChild(content);
}

function kelvinToCentigrade(temp){
    return parseInt(temp - 273.15);
}

function clearHtml(){
    frame1.innerHTML = '';
}