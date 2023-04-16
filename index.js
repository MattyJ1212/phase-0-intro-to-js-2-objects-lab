// Write your solution in this file!

const employee = {
    name: "Matt",
        address: {
         street: "Broadway",
            city: "New York",
            state: "NY",
            zip: "13456",
    }
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee};

newEmployee[key] = value;
return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
 employee[key] = value;
 return employee;

}

function deleteFromEmployeeByKey(employee, key, value) {
    const newestEmployee = {...employee};

    newestEmployee[key] = value;
    return newestEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee.name;
    return employee;
}