
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
console.log(`1.Find all the employees working in "TCS" and log only employee names`);
for (const employee of array) {
   if (employee.emp_company=="TCS") {
       console.log(employee.emp_name);
}
   
}
console.log(`2.Find all the employees with salary greater than or equal 50000`);
for (const employee of array) {
    if (employee.emp_salary>=50000) {
        console.log(employee.emp_name);
    }
   
}
console.log(`3.Find the sum of all employees salary`);

let sumSalary = 0;
array.forEach( (employee) => {
    sumSalary = sumSalary + employee.emp_salary;
});console.log(sumSalary);
console.log(`4.Find the average of all employees salary`);

let averageSalary = sumSalary / array.length;
console.log(`Average Salary is : ${averageSalary}`);
console.log(`5.Find the "IT" or "HR" department empolyees whose salary is greater than or equal to 75000`);
array.forEach( (employee) => {
    if ((employee.emp_dept=="IT" || employee.emp_dept=="HR" )&& employee.emp_salary>=75000 ) {
       console.log(employee); 
    }
});

