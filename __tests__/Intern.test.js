const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

test('creates an intern object', () => {
    const intern = new Intern(
        'Carlos',
        1,
        'carlos@test.com',
        'UC Berkeley',
        'Intern'
    );

    expect(intern.name).toBe('Carlos');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('carlos@test.com');
    expect(intern.school).toBe('UC Berkeley');
});

test('Get intern name', () => {
    const intern = new Intern('Carlos', 1, 'carlos@test.com');

    expect(intern.getName()).toHaveProperty('name');
});

test('Get intern id', () => {
    const intern = new Intern('Carlos', 1, 'carlos@test.com');

    expect(intern.getId()).toHaveProperty('id');
});

test('Get intern email', () => {
    const intern = new Intern('Carlos', 1, 'carlos@test.com');

    expect(intern.getEmail()).toHaveProperty('email');
});

test('Get intern role', () => {
    const intern = new Intern('Carlos', 1, 'carlos@test.com');

    expect(intern.getRole()).toBe('Intern');
});

test('Get intern school', () => {
    const intern = new Intern(
        'Carlos',
        1,
        'carlos@test.com',
        'UC Berkeley',
        'Intern'
    );

    expect(intern.getSchool()).toHaveProperty('school');
});