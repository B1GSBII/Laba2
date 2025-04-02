function removeClass(obj, cls) {
  obj.className = obj.className
      .split(' ')
      .filter(function(classItem) {
        return classItem !== cls;
      })
      .join(' ');
}

Тарас = { name: "Тарас", age: 23 };
Неля = { name: "Неля", age: 18 };
Олег = { name: "Олег", age: 17 };
people = [Тарас, Неля, Олег];

function sortPeopleByAge(array) {
  return array.sort(function(a, b) {
    return a.age - b.age;
  });
}
