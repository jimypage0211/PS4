const request = require('request');

function getWithCallback(callback) {
    const url = 'https://postman-echo.com/get';

    request(url, (err, res, body) => {
        if (err) {
            callback(err); // Pass the error to the callback function
        } else {
            const data = JSON.parse(body); // Parse the response body
            callback(null, data); // Pass the data to the callback function
        }
    });
}

getWithCallback((err, data) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('Data:', data);
    }
});