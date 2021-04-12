const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
	const intern = new Intern();

	expect(intern.school).toEqual(expect.any(String));

});