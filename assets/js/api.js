"use strict";
const api_key = "e0cb04edd9bc3730eadbfeed5d259e7b";
const imageBaseURL = "http://image.tmdb.org/t/p/";

// fetch data from a server using the 'url' and passes the result in JSON data to a 'callback function, along with an optional paramenter if has 'optionalParam'

const fetchDataFromServer = function (url, callback, optionalParam) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data, optionalParam));
};

export { imageBaseURL, api_key, fetchDataFromServer };
