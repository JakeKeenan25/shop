const tools = require("./src/utils/tools");
console.log("tools:", tools);

const Employee = require("./src/modules/employee");

const x = new Employee("Jake");
const y = new Employee("Dory");

console.log(x.sayName());

console.log(x, y);
