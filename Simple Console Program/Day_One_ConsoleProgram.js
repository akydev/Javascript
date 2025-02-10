//Write a program to calulate total salary and inhand income.

//Create Variable and assign its value to the variable.

let emp_basic_salary = 5000;
console.log("Basic Salary = " + emp_basic_salary);

let hra = 0.5; // 50% of HRA. (50 / 100)
let se = 0.3; // 30% of Se. (30 / 100)
let total;
let tax = 0.1; // 10% of Tax. (10 / 100)
let inhand_salary;

    hra = (emp_basic_salary * hra);
    console.log("HRA = " + hra);

    se = (emp_basic_salary * se);
    console.log("Se = " + se);

    total = emp_basic_salary + hra + se;
    console.log("Total Emp Salary = " + total);

    tax = (total * tax);
    console.log("Tax Amount = " + tax);

    inhand_salary = total - tax;
    console.log("Inhand Salary = " + inhand_salary);




