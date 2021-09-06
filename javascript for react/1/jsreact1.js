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
  for (name in salaries) {
    if (salaries[name] > max) {
      max = salaries[name];
      mostSalaries = name;
    }
  }
  return mostSalaries;
}
