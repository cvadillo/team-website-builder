const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
	const employee = new Employee('Carlos', 123, 'cvadillo@gmail.com');

	expect(employee.name).toBe('Carlos');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('cvadillo@gmail.com');
});

test('Get employee name', () => {
    const employee = new Employee('Carlos', 123, 'cvadillo@gmail.com');

    expect(employee.getName()).toHaveProperty('name');
});

test('Get employee id', () => {
    const employee = new Employee('Carlos', 123, 'cvadillo@gmail.com');

    expect(employee.getId()).toHaveProperty('id');
});

test('Get employee email', () => {
    const employee = new Employee('Carlos', 123, 'cvadillo@gmail.com');

    expect(employee.getEmail()).toHaveProperty('email');
});

test('Get employee role', () => {
    const employee = new Employee('Carlos', 123, 'cvadillo@gmail.com');

    expect(employee.getRole()).toBe('Employee');
});