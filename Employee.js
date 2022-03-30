// employee constructor 
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // returning name 
    getName () {
        return this.name;
    }

    // returning ID
    getId () {
        return this.id;
    }   

    // returning email
    getEmail () {
        return this.email;
    }

    // returning employee type 
    getRole () {
        return 'Employee'; 
    }
};

// to be exported 
module.exports = Employee; 