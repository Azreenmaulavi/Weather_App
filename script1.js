const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "69b14fdcc3msh4b1bc1d481e934ep189fb2jsne5bbfaf9bf17",
      "X-RapidAPI-Host": "solcast.p.rapidapi.com",
    },
  };
  
  fetch('https://solcast.p.rapidapi.com/radiation/forecasts?latitude=%3CREQUIRED%3E&longitude=%3CREQUIRED%3E&format=json',options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
  
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.log(err));
  