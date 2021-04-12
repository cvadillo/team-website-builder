const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name = '', id, email, number, role) {
        super(name, id, email, role);

        this.number = number;
    }
    getRole() {
        return 'Manager';
    };
}

module.exports = Manager;