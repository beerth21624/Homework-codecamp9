1;
function fruit() {
    let key = prompt('frut name');
    let obj = {};
    while (key !== 'stop') {
        let value = prompt('number');
        obj[key] = value;
        key = prompt('name');
    }
    console.log(obj);
}

2;
function fruits() {
    let key = prompt('Fruit name');
    let obj = {};
    while (key !== 'stop') {
        let value = prompt(`number ${key}`);
        if (+value > 1) {
            key = key + 's';
        }
        obj[key] = value;
        key = prompt('name');
    }
    console.log(obj);
}