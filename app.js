let counter = 0
function change_image() {
    let city_name = document.getElementById('search-bar').value;
    let city_data = {
        'QuatubMinarBg.jpg' : 'delhi',
        'Chennai.jpg' : 'chennai',
        'mahabalipuram.jpg' : 'tamil nadu',
        'NewYorkBg.jpg' : 'new york',  
    }
    for (let i in city_data){
        // console.log(i) // value of i is what is written on the left of the colon
        // console.log(city_data[i]) // value of city_data[i] is what is on the right of the colon
        if(city_name.toLowerCase() == city_data[i]){
            let element = document.querySelector('body');
            element.style.backgroundImage = `url(${i})`;
            return;
        }
        else{
            counter++
        }
    }
}
if (counter == 4) {
    console.log('no match found')
}

let div_1 = document.getElementsByTagName('div')[1]

function ShowData() {
    let city_name = document.getElementById('search-bar').value;
    // let city_name_1 = document.getElementById('search-bar').value;
    console.log(city_name)
    let promise = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city_name,{
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '37f41562femsh1c27bce3da34acdp131359jsne4832b76343e',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    })
    promise
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        div_1.innerHTML = '';
        div_1.innerHTML = div_1.innerHTML + `<h3>Temerature For ${city_name}</h3>`
        div_1.innerHTML = div_1.innerHTML + `Temperature: ${response.temp}°C <br>`
        div_1.innerHTML = div_1.innerHTML + `Feels Like: ${response.feels_like}°C`
        document.getElementById('search-bar').value = ''
      });
}