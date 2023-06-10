const request = require('request');
function getWithPromise() {

    const url = 'https://postman-echo.com/get?test=123';
    return new Promise((resolve, reject) => {
            request(url, (err, response, body) => {
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