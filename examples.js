// Real world example

const students = [
  {name:"John", marks:80},
  {name:"Sara", marks:45},
  {name:"Mike", marks:70}
];

// Get passed students
const passed = students.filter(s => s.marks > 50);

// Get their names
const names = passed.map(s => s.name);

console.log(names);
