const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe('Testing Intern Class', () => {
    it('should be able to create instance', () => {
        // data set up
        const name = 'Miko';
        const id = 77;
        const email = 'miko@mail.com';
        const school = 'UC Berkeley';
        // create case
        const intern = new Intern(name, id, email, school);
        // make assertion
        expect(intern.name).toBe(name);
        expect(intern.id).toBe(id);
        expect(intern.email).toBe(email);
        expect(intern.school).toBe(school);
    });
});