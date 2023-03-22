const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Testing Manager Class', () => {
    it('should be able to create instance', () => {
        // data set up
        const name = 'Miko';
        const id = 77;
        const email = 'miko@mail.com';
        const officeNumber = 21;
        // create case
        const manager = new Manager(name, id, email, officeNumber);
        // make assertion
        expect(manager.name).toBe(name);
        expect(manager.id).toBe(id);
        expect(manager.email).toBe(email);
        expect(manager.officeNumber).toBe(officeNumber);
    });
});