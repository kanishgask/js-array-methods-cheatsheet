// find() returns the first element that satisfies a condition

const users = [
  {id:1, name:"Alice"},
  {id:2, name:"Bob"},
  {id:3, name:"Charlie"}
];

const user = users.find(u => u.id === 2);

console.log(user);
