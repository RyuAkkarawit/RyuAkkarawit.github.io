document.getElementById('weatherForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = 'fe0d5383650cfb7613296a41b6abb412';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('temp').innerText = `${data.main.temp} °C`;
            document.getElementById('humidity').innerText = `${data.main.humidity} %`;
            document.getElementById('wind').innerText = `${data.wind.speed} m/s`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});


