const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
	const manager = new Manager();

	expect(manager.number).toEqual(expect.any(String));
});