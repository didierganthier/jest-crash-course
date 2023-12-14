const fetchPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve('peanut butter');
        }, 2000);
    });
}

module.exports = fetchPromise;