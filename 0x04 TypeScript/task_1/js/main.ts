/**
 * Represents a teacher with basic personal and employment information.
 *
 * @property firstName - The teacher's first name.
 * @property lastName - The teacher's last name.
 * @property fullTimeEmployee - Indicates if the teacher is a full-time employee.
 * @property location - The location where the teacher works.
 * @property yearsOfExperience - (Optional) The number of years the teacher has worked.
 * @property extra - (Optional) Additional properties related to the teacher.
 */
interface ITeacher {
 firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    yearsOfExperience?: number,
    extra?: object 
}

class TeacherImpl {
  readonly firstName!: string;
  readonly lastName!: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;

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
const teacher = new TeacherImpl('John', 'Doe', true, 'NY', 10, { contract: true });
console.log(teacher);

// should print
// Object
// contract: true
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "NY"
// yearsOfExperience: 10

interface Directors extends ITeacher {
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
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}
