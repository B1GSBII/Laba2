obj1 = {
    className: 'Объект 1 open'
};

removeClass(obj1, 'open');
console.log(obj1.className);

removeClass(obj1, 'blabla');
console.log(obj1.className);

obj2 = {
    className: 'my menu menu'
};

removeClass(obj2, 'menu');
console.log(obj2.className);

sortPeopleByAge(people);

console.log(people);
alert(people[0].age);