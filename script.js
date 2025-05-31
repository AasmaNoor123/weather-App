<<<<<<< HEAD
function getWeather() {
    let city = document.getElementById('city').value;
    let apiKey = "1b4949d7be92ccbd520737b27c355edd";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            if (data.cod !== 200) {
                throw new Error("City not found");
            }

            let temp = data.main.temp;
            let condition = data.weather[0].main;
            let name = data.name;
            let icon = data.weather[0].icon;
            // let iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

            document.getElementById("output").innerHTML =
                `<b>📍 City:</b> ${name} <br>
                 <b>🌡️ Temperature:</b> ${temp}°C <br>
                 <b>🌈 Weather:</b> ${condition} <br>`;

                //   <img src="${iconUrl}" alt="${condition} icon">;
        })
        .catch(function () {
            document.getElementById("output").innerHTML = "❌ Error: City not found!";
        });
}




  
    // Ex: 1 from Arrow Function :
    
    //     .then(response => response.json())
    //     .then(data => {
    //         let temp = data.main.temp;
    //         let condition = data.weather[0].main;//data.
    //         let name = data.name;
    
    //         document.getElementById('outPut').innerHTML=
    //         <b> City : </b> ${name} <br>
    //         <b> Temperature : </b> ${temp}°C <br>
    //         <b> Weather : </b> ${weather} <br>
    //     })
    // .catch(()=>{
    //     document.getElementById('outPut').innerHTML=
    //     <b> Error : </b> City is not found, Please try again.....
    // })


// Ex : 2 From Function :
    // .then(function (response) { //JSON
    // return response.json();//JSON = obj
    // })
    // .then(function (data) {//convertable obj data
    // let temp = data.main.temp;
    // let condition = data.weather[0].main;//data.
    // let name = data.name;
    // document.getElementById('outPut').innerHTML=
    // <b> City : </b> ${name} <br>
    // <b> Temperature : </b> ${temp}°C <br>
    // <b> Weather : </b> ${weather} <br>
    
    // });
//  .catch(()=>{
//     document.getElementById('outPut').innerHTML=
//     <b> Error : </b> City is not found, Please try again.....
// })
=======
function getWeather() {
    let city = document.getElementById('city').value;
    let apiKey = "1b4949d7be92ccbd520737b27c355edd";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            if (data.cod !== 200) {
                throw new Error("City not found");
            }

            let temp = data.main.temp;
            let condition = data.weather[0].main;
            let name = data.name;
            let icon = data.weather[0].icon;
            // let iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

            document.getElementById("output").innerHTML =
                `<b>📍 City:</b> ${name} <br>
                 <b>🌡️ Temperature:</b> ${temp}°C <br>
                 <b>🌈 Weather:</b> ${condition} <br>`;

                //   <img src="${iconUrl}" alt="${condition} icon">;
        })
        .catch(function () {
            document.getElementById("output").innerHTML = "❌ Error: City not found!";
        });
}




  
    // Ex: 1 from Arrow Function :
    
    //     .then(response => response.json())
    //     .then(data => {
    //         let temp = data.main.temp;
    //         let condition = data.weather[0].main;//data.
    //         let name = data.name;
    
    //         document.getElementById('outPut').innerHTML=
    //         <b> City : </b> ${name} <br>
    //         <b> Temperature : </b> ${temp}°C <br>
    //         <b> Weather : </b> ${weather} <br>
    //     })
    // .catch(()=>{
    //     document.getElementById('outPut').innerHTML=
    //     <b> Error : </b> City is not found, Please try again.....
    // })


// Ex : 2 From Function :
    // .then(function (response) { //JSON
    // return response.json();//JSON = obj
    // })
    // .then(function (data) {//convertable obj data
    // let temp = data.main.temp;
    // let condition = data.weather[0].main;//data.
    // let name = data.name;
    // document.getElementById('outPut').innerHTML=
    // <b> City : </b> ${name} <br>
    // <b> Temperature : </b> ${temp}°C <br>
    // <b> Weather : </b> ${weather} <br>
    
    // });
//  .catch(()=>{
//     document.getElementById('outPut').innerHTML=
//     <b> Error : </b> City is not found, Please try again.....
// })
>>>>>>> 0f2ede8ca8880dfd03bb1e0d5be94f4666f4e4de
