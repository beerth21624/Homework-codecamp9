1;
    1.1;
    let array2 = array1.map(x => x * 2)

    1.2;
    let array2 = array1.map(x => String(x))

    1.3;
    let array2 = array1.map(x => typeof (x))

    1.4;
    let array2 = array1.map(x => x.toUpperCase())

    1.5;
    let array2 = array1.map(x => x.name)

    1.6;
    let array2 = array1.map(x => x.age)

    1.7;
    let array2 = array1.map(x => x.name + ' ' + x.surname)

    1.8;
    let array2 = array1.map(x => (x % 2 == 0) ? 'even' : 'odd')

    1.9;
    let array2 = array1.map(x => Math.abs(x))

    1.10;
    let array2 = array1.map(x => x.toFixed(2))

    1.11;
    let array2 = array1.map(function (x) {
        let birth = new Date(x.birth)
        let age = new Date().getFullYear() - birth.getFullYear()
        let newArray = {}
        for (let key in x) {
            newArray[key] = x[key]
        }
        newArray.age = age
        return newArray
    })

    1.12;
    let array2 = array1.map(function (value) {
        let date = new Date(value.birth);
        let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let rows =
            '<tr>' +
            '<td>' + value.name + '</td>' +
            '<td>' + date.getDate() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear() + '</td>' +
            '</tr>'
        return rows
    })




2;
    2.1;
    let array2 = array1.filter(x => x > 10)

    2.2;
    let array2 = array1.filter(x => x % 2 === 1)

    2.3;
    let array2 = array1.filter(x => typeof x === 'number')

    2.4;
    let array2 = array1.filter(x => x.length > 6)

    2.5;
    let array2 = array1.filter(x => x.age < 18)

    2.6;
    let array2 = array1.filter(x => x.age !== 32)

    2.7;
    let array2 = array1.filter(x => x > 0)

    2.8;
    let array2 = array1.filter(x => x % 3 === 0)

    2.9;
    let array2 = array1.filter(x => typeof x === 'string')

    2.10;
    let array2 = array1.filter(x => x === x.toLocaleUpperCase())

    2.11
    let array2 = array1.filter(function (x) {
        let birthDate = new Date(x.birth)
        return birthDate.getMonth() == 9
    })

    2.12
    let array2 = array1.filter(function (x) {
        let birthDate = new Date(x.birth)
        return birthDate.getFullYear() < 2000
    })