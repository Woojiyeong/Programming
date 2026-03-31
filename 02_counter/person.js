// function printStudent({ name , age , major = "컴공"}){
//     console.log("--학생 정보--");
//     console.log( `이름: + ${name}`);
//     console.log( `나이: + ${age}`);
//     console.log( `전공: + ${major}`);
// }

// printStudent({name:"이영희", age: 21, major:"전자공학"});
// printStudent({name:"박지성", age: 23});

// const students = [
//   { name: "Kim", age: 21 },
//   { name: "Lee", age: 18 },
//   { name: "Park", age: 23 }
// ];

// const evenNumbers = students.filter(student => student.age >= 20 ,0);
// console.log(evenNumbers);

// const students2 = [
//   { id: 1, name: "Lee", age: 21 },
//   { id: 2, name: "Kim", age: 22 },
//   { id: 3, name: "Park", age: 23 }
// ];

// students2.forEach(({ name, age }) => {
//   console.log(name, age);
// });
const students2 = [
  { name: "Kim", age: 20 },
  { name: "Lee", age: 21 },
  { name: "Park", age: 22 }
];
const names = students2.map(student => student.name);

console.log(names);