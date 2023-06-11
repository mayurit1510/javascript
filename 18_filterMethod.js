
class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;


    }
}
const emp_anil = new Employee(22,"Anil","IT",50000,"TCS");
const emp_radh = new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali = new Employee(66,"Sonali","Fianance",45000,"Infy");
const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny = new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi = new Employee(22,"Anil","HR",85000,"Infy");
const array=[emp_anil, emp_radh , emp_rishi ,emp_sonali ,emp_monika ,emp_viny ,emp_mahi ];

console.log(`1.All employee from "Wipro"company`);
const arrayWiproEmployees=array.filter((employee)=>{
    return employee.emp_company=="Wipro";
});
const arrayWiproEmployeesName=arrayWiproEmployees.map((employee)=>{
    return employee.emp_name;
})
console.log(arrayWiproEmployeesName);

console.log(`2.All employee from "IT"and "HR" Department`);
const arrayEmployees=array.filter((employee)=>{
    return employee.emp_dept=="IT" || employee.emp_dept=="HR";
});
const arrayEmployeesName=arrayEmployees.map((employee)=>{
    return employee.emp_name;
})
console.log(arrayEmployeesName);

console.log(`3.All employees whose emp id's are greater than 50`);
const arrayEmployees1=array.filter((employee)=>{
    return employee.emp_id>=50;
});
const arrayEmployeesName1=arrayEmployees1.map((employee)=>{
    return employee.emp_name;
})
console.log(arrayEmployeesName1);

console.log(`4.All the employee names whose name start with "A" or "V" and "M"`);
const arrayEmployees4=array.filter((employee)=>{
    return employee.emp_name.startsWith("A") ||employee.emp_name.startsWith("V")||employee.emp_name.startsWith("M") ;
})
const arrayEmployeesName4=arrayEmployees4.map((employee)=>{
    return employee.emp_name;
})
console.log(arrayEmployeesName4);


console.log(`5.The Average salary of the employee for all the department`);
let sumSalary = 0;
const arrayEmployees2=array.filter((employee)=>{
     sumSalary = sumSalary + employee.emp_salary;
     return averageSalary = sumSalary / array.length;
});
console.log(`Average Salary is : ${averageSalary}`);

console.log(`6.The average salary for it department`);
const arrayEmployees5=array.filter((employee)=>{
    return employee.emp_dept=="IT";
    
})
const arrayEmployeesName5=arrayEmployees5.map((employee)=>{
   return employee.emp_salary;
})
console.log(arrayEmployeesName5);
const sum=arrayEmployeesName5.reduce((runningTotal,value)=>{
    return runningTotal+value /arrayEmployeesName5.length;
},0);
console.log("Average is",sum);


