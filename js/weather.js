"use strict";

const weatherUrl = "http://api.openweathermap.org/data/2.5/weather";
const oneCallUrl = "http://api.openweathermap.org/data/2.5/onecall";

const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

// Wind direction function
function windDirection(degrees) {
    let cardinalDirection = '';
    if ((degrees > 348.75 && degrees <= 360) || (degrees >= 0 && degrees <= 11.25)) {
        cardinalDirection = "N";
    } else if (degrees > 11.25 && degrees <= 33.75) {
        cardinalDirection = "NNE";
    } else if (degrees > 33.75 && degrees <= 56.25) {
        cardinalDirection = "NE";
    } else if (degrees > 56.25 && degrees <= 78.75) {
        cardinalDirection = "ENE";
    } else if (degrees > 78.75 && degrees <= 101.25) {
        cardinalDirection = "E";
    } else if (degrees > 101.25 && degrees <= 123.75) {
        cardinalDirection = "ESE";
    } else if (degrees > 123.75 && degrees <= 146.25) {
        cardinalDirection = "SE";
    } else if (degrees > 146.25 && degrees <= 168.75) {
        cardinalDirection = "SSE";
    } else if (degrees > 168.75 && degrees <= 191.25) {
        cardinalDirection = "S";
    } else if (degrees > 191.25 && degrees <= 213.75) {
        cardinalDirection = "SSW";
    } else if (degrees > 213.75 && degrees <= 236.25) {
        cardinalDirection = "SW";
    } else if (degrees > 236.25 && degrees <= 258.75) {
        cardinalDirection = "WSW";
    } else if (degrees > 258.75 && degrees <= 281.25) {
        cardinalDirection = "W";
    } else if (degrees > 281.25 && degrees <= 303.75) {
        cardinalDirection = "WNW";
    } else if (degrees > 303.75 && degrees <= 326.25) {
        cardinalDirection = "NW";
    } else if (degrees > 326.75 && degrees <= 348.75) {
        cardinalDirection = "NNW";
    }
    return cardinalDirection;
}

// Function to format time
function formatTime(timeStamp) {
    let dateTime = new Date(timeStamp * 1000);
    let hour = appendLeadingZeroes(dateTime.getHours());
    let minutes = appendLeadingZeroes(dateTime.getMinutes());
    function fixHour() {
        if (hour > 12) {
            hour -= 12;
            minutes += " PM";
        } else if (hour === 12) {
            minutes += " PM";
        } else {
            minutes += " AM";
        }
    }
    fixHour();
    return hour + ":" + minutes;
}

// Function to format date
function formatDate(timeStamp) {
    let dateTime = new Date(timeStamp * 1000);
    let year = dateTime.getFullYear();
    let month = months[dateTime.getMonth()];
    let day = dateTime.getDate();
    return month + " " + day + " " + year;
}

// Function to format day of the week
function formatDay(timeStamp) {
    let dateTime = new Date(timeStamp * 1000);
    return daysOfTheWeek[dateTime.getDay()];
}

// Function to append leading zeroes
function appendLeadingZeroes(n) {
    if (n <= 9) {
        return "0" + n;
    }
    return n;
}

// Function to get mapbox map
mapboxgl.accessToken = MAPBOX_API;
const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/outdoors-v11",
    center: [-75.1497, 39.9495],
    zoom: 15
});

// Function to create marker
let el = document.createElement("div");
el.className = "marker5";
let marker = new mapboxgl.Marker(el,{
    draggable: true
})
    .setLngLat([-75.1497, 39.9495])
    // Set starting position on the map
    .setLngLat([-75.1497, 39.9495])
    .addTo(map);

// Gets weather data for location of dropped marker
marker.on("dragend", function () {
    getWeather();
});

// Function to get marker's current lat and long
map.on("click", function (e) {
    marker.setLngLat(e.lngLat);
    getWeather();
});

// Function to get weather data
function getWeather() {
    $.get(oneCallUrl, {
        APPID: WEATHERMAP_API,
        lat: marker.getLngLat().lat,
        lon: marker.getLngLat().lng,
        units: "imperial",
    }).done(function (data) {
        console.log(data);
        $("#tdate").html(`, ${formatDate(appendLeadingZeroes(data.current.dt))} ${formatTime(appendLeadingZeroes(data.current.dt))}`);
        $("#weather").html(data.current.weather[0].description);
        $("#sunrise").html(`Sunrise: ${formatTime(data.current.sunrise)}`);
        let iconCode = data.current.weather[0].icon;
        let iconUrl = `http://openweathermap.org/img/wn/${iconCode}@4x.png`;

        $("#weather-icon").attr('src', iconUrl);
        $("#temp").html(`${data.current.temp.toFixed(1)}°F`);
        $("#high-low").html(`High ${data.daily[0].temp.max.toFixed(1)}° • Low ${data.daily[0].temp.min.toFixed(1)}°`);
        $("#humidity").html(`Humidity: ${data.current.humidity}%`);
        $("#wind").html(`Wind: ${data.current.wind_speed.toFixed(1)} mph ${windDirection(data.current.wind_deg)}`);
        $("#sunset").html(`Sunset: ${formatTime(data.current.sunset)}`);
        $("#forecast").html("");
        // Loop to get forecast data
        data.daily.forEach(function (day, index) {
            if (index < 7) {
                iconCode = day.weather[0].icon;
                iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
                let sunrise = formatTime(day.sunrise + 86400);
                let sunset = formatTime(day.sunset + 86400);
                $("#forecast").append(`
	                    <div class="card forecast-card">
	                    <div class="d-flex row justify-content-center">
	                    <h5 class="d-flex justify-content-center"=>${formatDay(appendLeadingZeroes(day.dt))}</h5>
<!--	                    Line below shows the time of the forcasted weather.  It is not needed, so I commented it out.-->
<!--	                    <h5 class="d-flex justify-content-center">${formatTime(appendLeadingZeroes(day.dt + 72000))}</h5>-->
	                    <h5 class="d-flex justify-content-center">${formatDate(appendLeadingZeroes(day.dt + 72000))}</h5>
	                    <img src="${iconUrl}" style="width: 75px">
	                    <span class="d-flex justify-content-center">${day.temp.max.toFixed(1)}° / ${day.temp.min.toFixed(1)}°</span>
	                    <span class="d-flex justify-content-center">Humidity: ${day.humidity}%</span>
	                    <span class="d-flex justify-content-center">Wind: ${day.wind_speed.toFixed(1)} mph ${windDirection(day.wind_deg)}</span>
	                    <span class="d-flex justify-content-center">Sunrise: ${sunrise}</span>
	                    <span class="d-flex justify-content-center">Sunset: ${sunset}</span>
	                    </div>
	                    </div>`
                );
            }
        });
    });
}

// Function to update map for new location
async function updateInformation() {
    if ($("#location").val().trim() === "") {
    } else {
        let city = $("#location").val();
        let coords = await geocode(city, MAPBOX_API);
        console.log(coords);
        coords[0] = parseFloat(coords[0]);
        coords[1] = parseFloat(coords[1]);
        $.get(weatherUrl, {
            APPID: WEATHERMAP_API,
            lat: coords[1],
            lon: coords[0],
            units: "imperial"
        }).done(function (data) {
            console.log(data.coord.lat);
            console.log(data.coord.lon);
            marker.setLngLat([data.coord.lon, data.coord.lat])
                .addTo(map);
            map.jumpTo({center: data.coord, zoom: 15});
            getWeather();
        });
    }
}

// Function to get weather once button is clicked
$("#location-button").on("click", function () {
    updateInformation();
    $("#location").value = "";
});

// Function to get weather when enter is pressed
$("#location").on("keyup", function (e) {
    if (e.key === "Enter" || e.key === 13) {
        updateInformation();
        $("#location").value = "";
    }
});

// Function to get weather when page loads
getWeather();
