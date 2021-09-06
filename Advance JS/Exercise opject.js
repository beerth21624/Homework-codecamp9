1;
 let blank = {};
 blank.name = 'Sonter';
 blank.sername = 'Pakorn';
 blank.name = 'Boy';
 delete blank.name;

2;
function isEmpty(obj) {
 for (let key in obj) {
     return false;
 }
 return true;
}

3;  //No Error

4;
function sum(obj) {
 let total = 0;
 for (let key in obj) {
     total += obj[key];
 }
 return total;
}

5;
function multiplyNumeric(obj, times) {
 for (let key in obj) {
     if (typeof obj[key] !== 'number') continue;
     obj[key] *= times
 }
}