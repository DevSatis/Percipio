// console.log("Hello Satish!");
// function x(y){
//     return "I'm function x " + y();
// }
// function y(){
//     return "I'm function y";
// }
// console.log(x(y));
import { Employee } from "./employee.js";

const employee = new Employee("Satish", "Software Engineer");
let empDetails = employee.employeeDetails();
console.log(empDetails);
