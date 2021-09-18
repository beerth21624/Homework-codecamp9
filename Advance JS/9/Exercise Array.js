1; 4


2;
let styles = ['jazz', 'blues'];
styles.push('Rock-n-Roll')
styles.splice(1, 1, 'Classics')
let a = styles.shift();
styles.unshift('Rap', 'Reggae');


3;
function sumInput() {
    let sum = 0;
    let arr = [];
    while (true) {
        let value = +('Number');
        if (isNaN(value)) break;
        sum += value;
        arr.push(value);
    } 
    console.log(sum);
}