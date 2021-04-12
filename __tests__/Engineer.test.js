const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');
const { test, expect } = require('@jest/globals');

test('creates an engineer object', () => {
    const engineer = new Engineer(
        'Carlos',
        1,
        'carlos@carlos.com',
        'https://github.com/cavarod',
        'Engineer'
    );

    expect(engineer.name).toBe('Carlos');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('carlos@carlos.com');
    expect(engineer.github).toBe('https://github.com/cavarod');
});

test('Get engineer name', () => {
    const engineer = new Engineer('Carlos', 1, 'carlos@carlos.com');

    expect(engineer.getName()).toHaveProperty('name');
});

test('Get engineer id', () => {
    const engineer = new Engineer('Carlos', 1, 'carlos@carlos.com');

    expect(engineer.getId()).toHaveProperty('id');
});

test('Get engineer email', () => {
    const engineer = new Engineer('Carlos', 1, 'carlos@carlos.com');

    expect(engineer.getEmail()).toHaveProperty('email');
});

test('Get engineer role', () => {
    const engineer = new Engineer('Carlos', 1, 'carlos@carlos.com');

    expect(engineer.getRole()).toBe('Engineer');
});

test('Get engineer github', () => {
    const engineer = new Engineer(
        'Carlos',
        1,
        'carlos@carlos.com',
        'cavarod',
        'Engineer'
    );

    expect(engineer.getGithub('cavarod')).toHaveProperty('github');
});