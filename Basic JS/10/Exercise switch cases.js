1;
function changeIfElse() {
  let a = prompt(' Browser ที่คุณใช้งานอยู่ คือ ? .....');

  if (a === 'Edge') {
    alert(" You've got the Edge! ");
  } else if (
    a === 'Chrome' ||
    a === 'Firefox' ||
    a === 'Safari' ||
    a === 'Opera'
  ) {
    alert(' Okey we support these broeser too ');
  } else {
    alert(' We hope that this page looks ok! ');
  }
}

2;
function changeSwitch() {
  let a = +prompt('a?', '');
  switch (a) {
    case 0:
      alert(0);
      break;

    case 1:
      alert(1);
      break;

    case 2:
    case 3:
      alert('2,3');
      break;

    default:
      alert('none');
  }
}
