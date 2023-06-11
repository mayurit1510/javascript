
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
console.log(`1.The list of all employee name & log on new array `);
const arraynew= array.map((employee)=>{
    return employee.emp_name;
});
console.log(arraynew);
 console.log(`2.The list of departments`);
array.map((employee)=>{
    console.log(employee.emp_dept);
});
console.log(`3.The list of Employee id's`);
array.map((employee)=>{
    console.log(employee.emp_id);
});

