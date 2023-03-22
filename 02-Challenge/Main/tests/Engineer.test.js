const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe('Testing Engineer Class', () => {
    it('should be able to create instance', () => {
        // data set up
        const name = 'Miko';
        const id = 77;
        const email = 'miko@mail.com';
        const github = 'codemaster';
        // create case
        const engineer = new Engineer(name, id, email, github);
        // make assertion
        expect(engineer.name).toBe(name);
        expect(engineer.id).toBe(id);
        expect(engineer.email).toBe(email);
        expect(engineer.github).toBe(github);
    });
});