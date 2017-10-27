"use strict";


// PART 1: SHOW A FORTUNE
function fortune(result) {
    $('#fortune-text').html(result);
}


function showFortune(evt) {
    evt.preventDefault();
    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', fortune);
    // $.get('/fortune', function(result) {$('#fortune-text').html(result);})
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER
function weather(result) {
    $('#weather-info').html(result.forecast);
}

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, weather);


    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


