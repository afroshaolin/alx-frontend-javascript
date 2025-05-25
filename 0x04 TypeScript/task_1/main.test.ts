import { describe, it, expect } from '@jest/globals';

// Re-declare the classes and functions for testing
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

interface Directors extends Teacher {
  numberOfReports: number;
}

const printTeacher = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

describe('Teacher class', () => {
  it('should create a Teacher with correct properties', () => {
    const teacher = new Teacher('John', 'Doe', true, 'NY', 10, { contract: true });
    expect(teacher.firstName).toBe('John');
    expect(teacher.lastName).toBe('Doe');
    expect(teacher.fullTimeEmployee).toBe(true);
    expect(teacher.location).toBe('NY');
    expect(teacher.yearsOfExperience).toBe(10);
    expect((teacher as any).contract).toBe(true);
  });

  it('should not allow firstName and lastName to be changed', () => {
    const teacher = new Teacher('Jane', 'Smith', false, 'LA');
    expect(() => { (teacher as any).firstName = 'Alice'; }).toThrow();
    expect(() => { (teacher as any).lastName = 'Brown'; }).toThrow();
  });
});

describe('Directors interface', () => {
  it('should allow creation of a Directors object', () => {
    const director1: Directors = {
      firstName: 'John',
      lastName: 'Doe',
      location: 'London',
      fullTimeEmployee: true,
      numberOfReports: 17,
    };
    expect(director1.numberOfReports).toBe(17);
    expect(director1.firstName).toBe('John');
  });
});

describe('printTeacher', () => {
  it('should print the teacher name in the correct format', () => {
    expect(printTeacher('John', 'Doe')).toBe('J. Doe');
    expect(printTeacher('Alice', 'Smith')).toBe('A. Smith');
  });
});

describe('StudentClass', () => {
  it('should return correct displayName and workOnHomework', () => {
    const student = new StudentClass('Jane', 'Doe');
    expect(student.displayName()).toBe('Jane');
    expect(student.workOnHomework()).toBe('Currently working');
  });
});