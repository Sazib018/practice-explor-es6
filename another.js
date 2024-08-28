// task 1
const obb = [1, 3, 5, 7, 9];

// used map
const even = obb.map(num => num +1);
console.log(even);

// used forloop

let array =[];
let result;
for (let i = 0; i < obb.length; i++) {
    const even = obb[i];
    result = even +1;
    array.push(result);
}
console.log(array);

// task 2

const devide =  [33, 50, 79, 78, 90, 101, 30 ];
const vag = devide.filter(number => number % 10 === 0);
console.log(vag);


// task 3

const instructor = [
    { name: "Nodi", age: 28, position: "Senior" },
    { name: "Akil", age: 26, position: "Junior" },
    { name: "Shobuj", age: 30, position: "Senior" },
  ];
const Senior = instructor.filter(lady => lady.position === 'Senior');
console.log(Senior);

// task 4

const people = [
    { name: "Meena", age: 20 },
    { name: "Rina", age: 15 },
    { name: "Suchorita", age: 22 },
  ];

const sum = people.reduce((x , y) => x+y.age,0);
console.log(sum);

  



