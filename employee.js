export class Employee{
    name = "";
    department = "";
    constructor(name, department){
        this.name = name;
        this.department = department;
    }
    getName(){
        return this.name;
    }
    employeeDetails(){
        return this.name + " works in " + this.department;
    };

}