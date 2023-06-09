const request = require('request');
function getWithPromise() {
    return new Promise((resolve, reject) => {
            request('https://postman-echo.com/get?test=123', (err, response, body) => {
                    if (response) {
                        const data = JSON.parse(body); // Parse the response body
                        resolve(data);
                    } else {
                        reject(err);
                    }
                }
            )
        }
    );
}


getWithPromise()
    .then(data => console.log('Data:', data))
    .catch(err => console.error('Error:', err));