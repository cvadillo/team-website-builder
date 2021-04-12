const Manager = require('../lib/Manager.js');
const Employee = require('../lib/Employee.js');

test('creates a manager object', () => {
    const manager = new Manager('James May', 1, 'james.mayg@sumimasen.com', 1, 'Manager');

    expect(manager.name).toBe('James May');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('james.mayg@sumimasen.com');
    expect(manager.number).toEqual(expect.any(Number));
});

test('Gets manager name', () => {
    const manager = new Manager('James May');

    expect(manager.getName()).toHaveProperty('name');
});

test('Get manager id', () => {
    const manager = new Manager('James May', 1);

    expect(manager.getId()).toHaveProperty('id');
});

test('Get manager email', () => {
    const manager = new Manager('James May', 1, 'james.mayg@sumimasen.com', 1, 'Manager');

    expect(manager.getEmail()).toHaveProperty('email');
});

test('Get manager role', () => {
    const manager = new Manager('James May', 1, 'james.mayg@sumimasen.com', 1, 'Manager');

    expect(manager.getRole()).toBe('Manager');
});