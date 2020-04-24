let userLocation;
let x = document.getElementById("demo");

let getPosition = function (options) {
    return new Promise(function (resolve, reject) {
        if (!navigator.geolocation) {
            x.innerHTML = "Geolocation is not supported by this browser.";
        } else {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        }
    });
}

getPosition()
    .then((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
        userLocation = `{ lat: ${position.coords.latitude}, lon: ${position.coords.longitude}}`;
        console.log(userLocation);
        x.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
    })
    .catch((err) => {
        console.error(err.message);
    });