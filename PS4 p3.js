async function getWithAsyncAwait() {
    const url = 'https://postman-echo.com/get?test=123'
    let res = await fetch(url)
    return res.json()
}
getWithAsyncAwait()
    .then(data => console.log('Data:', data))
    .catch(err => console.error('Error:', err));