// using Manager constructor 
const Manager = require('../lib/Manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Bryan', 33, 'bryanprourke@gmail', 101);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Bryan', 33, 'bryanprourke@gmail.com', 101);

    expect(manager.getRole()).toEqual("Manager");
}); 