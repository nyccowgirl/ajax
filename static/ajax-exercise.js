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
    // TODO: request weather with that URL and show the forecast in #weather-info

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val(),};

    $.get(url, formData, weather);
    // $.get(url, formData, function(result) {$('#weather-info').html(result.forecast);}
}

$("#weather-form").on('submit', showWeather);


// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();
    // TODO: show the result message after your form

    let url = "/order-melons.json";
    let formData = {"melon-type": $("#melon-type-field").val(),
                    "qty": $("qty-field").val(),};

    $.post(url, formData, function(result) {$("#order-status").html(result.msg);});

    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
    if (result.code === "ERROR") {
        let text = $("#order-error");
        text.css("color", "red");
    }
}

$("#order-form").on('submit', orderMelons);


