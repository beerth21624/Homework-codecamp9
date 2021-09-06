ข้อ1
//2
//2
//null
//alert(2)
//3	*/

ข้อ2
function checkAge() {
    let age = +prompt('input age');
    if (age >= 18 && age <= 60)
        alert('อายุอยู่ระหว่าง 18 - 60');
}


ข้อ3
function checkAge2() {
    let age = +prompt('input age');
    if (age < 18 || age > 60)
        alert('อายุไม่อยู่ระหว่าง 18 - 60');
}

ข้อ4
//รัน
//รัน
// ไม่รัน

ข้อ5
function login() {
    let name = prompt('คุณคือใคร')
    if (name === 'Admin') {
        let password = prompt('รหัสผ่านของคุณคือ')
        if (password === '1234') {
            alert('ยินดีต้อนรับ');
        } else if (password !== '1234' && password !== '' && password !== null) {
            alert('Wrong password');
        } else {
            alert('ยกเลิก');
        }
    }

    else if (name !== 'Admin' && name !== '' && name !== null) {
        alert('ผมไม่รู้จักคุณ');
    } else {
        alert('ยกเลิก');
    }
}

