1;
function ucFirst(string) {
    return string[0].toUpperCase() + string.slice(1);
}


2;
function checkSpam(string) {
    let a = string.indexOf('xxx')
    let b = string.indexOf('viagra')
    return (a === -1 && b === -1) ? false : true;
}


3;
function truncate(string, maxlength) {
    return (string.length > maxlength) ? console.log(string.slice(0, maxlength) + '...') : console.log(string.slice(0))
}


4;
function extractCurrencyValue(string, rate) {
    return parseFloat(string) * rate;
}