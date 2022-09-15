// Your code here
let createEmployeeRecord = function (line) {
    return {
        firstName: line [0],
        familyName: line [1],
        title: line [2],
        payPerHour: line [3],
        timeInEvents: [],
        timeOutEvents: [],
    }
};

let createEmployeeRecords = function (employeeArray) {
    return employeeArray.map(line => createEmployeeRecord(line))
}

let createTimeInEvent = function () {
    
}