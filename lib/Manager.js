const Employee = require('./Employee')
// import Employee from './Employee' // New Way of require file

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return 'Manager'
    }
}

const def = new Manager('def', 1, 'def@def.com', 11)

console.log(def.getOfficeNumber())