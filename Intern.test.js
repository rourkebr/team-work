// using Intern constructor 
const Intern = require('../lib/Intern');

// creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Bryan', 33, 'bryanprourke@gmail.com', 'MSU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets school 
test('gets employee school', () => {
    const intern = new Intern('Bryan', 33, ;'bryanprourke@gmail.com', 'MSU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role 
test('gets role of employee', () => {
    const intern = new Intern('Bryan', 33, 'bryanprourke@gmail.com', 'MSU');

    expect(intern.getRole()).toEqual("Intern");
}); 