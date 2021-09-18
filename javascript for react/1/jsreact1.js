1;
let user = {
  name: 'John',
  years: 30,
};

let { name, years: age, isAdmin = false } = user;

2;
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalaries(salaries) {
  let mostSalaries = null;
  let max = 0;
  for (const key in salaries) {
    if (salaries[key] > max) {
      max = salaries[key];
      mostSalaries = key;
    }
  }
  return mostSalaries;
}
