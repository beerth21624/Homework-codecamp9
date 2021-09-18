1; //เลข 1

2; //ไม่เหมือน

3; //เหมือน

4;
for (let i = 2; i < 11; i++) console.log(i);

5;
let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

6;
function game() {
  let num1 = +'คนแรก';
  alert('ลองทายดู');

  while (true) {
    let num2 = +'คนสอง?';

    if (num1 === num2) break;
    else if (num1 > num2) {
      alert('มากกว่า');
    } else {
      alert('น้อยกว่า');
    }
  }
  alert('ถูกต้อง');
}
