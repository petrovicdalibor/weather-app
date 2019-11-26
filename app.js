window.addEventListener('load', () => {
    let long;
    let lat;

    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let temperatureDescription = document.querySelector('.temperature-description');

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'http://cors-anywhere.herokuapp.com/';
            const api = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/5061f908fef335c6fc9765f1ef107ea2/${lat},${long}`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const { temperature, summary } = data.currently;

                    // Set DOM Elements from the API
                    locationTimezone.textContent = data.timezone;
                    temperatureDegree.textContent = Math.floor(temperature);
                    temperatureDescription.textContent = summary;
                });
        });
    }

});
