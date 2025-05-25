interface Teacher {
 firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    yearsOfExperience?: number,
    extra?: object 
}

class Teacher {
  constructor(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    yearsOfExperience?: number,
    extra?: object
  ) {
    Object.defineProperty(this, 'firstName', { value: firstName, writable: false, configurable: false });
    Object.defineProperty(this, 'lastName', { value: lastName, writable: false, configurable: false });
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
    if (yearsOfExperience !== undefined) this.yearsOfExperience = yearsOfExperience;
    Object.assign(this, extra);
  }
}

// Example usage:
const teacher = new Teacher('John', 'Doe', true, 'NY', 10, { contract: true });
console.log(teacher);

// should print
// Object
// contract: true
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "NY"
// yearsOfExperience: 10

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    constructor( firstName: string, lastName: string) {}

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}
