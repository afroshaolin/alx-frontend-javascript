import { describe, it, expect } from '@jest/globals';

// Re-declare the Student interface and objects for testing
interface Student {
  firstName: string;
  lastName: string;
  age?: number;
  location: string;
  contract: boolean;
}

const student1: Student = {
  firstName: 'Gary',
  lastName: 'Doe',
  age: 23,
  location: 'London',
  contract: false,
};

const student2: Student = {
  firstName: 'Mary',
  lastName: 'Joe',
  age: 23,
  location: 'London',
  contract: true,
};

const studentsList: Student[] = [student1, student2];

describe('Student objects', () => {
  it('student1 should have correct properties', () => {
    expect(student1.firstName).toBe('Gary');
    expect(student1.lastName).toBe('Doe');
    expect(student1.age).toBe(23);
    expect(student1.location).toBe('London');
    expect(student1.contract).toBe(false);
  });

  it('student2 should have correct properties', () => {
    expect(student2.firstName).toBe('Mary');
    expect(student2.lastName).toBe('Joe');
    expect(student2.age).toBe(23);
    expect(student2.location).toBe('London');
    expect(student2.contract).toBe(true);
  });

  it('studentsList should contain both students', () => {
    expect(studentsList).toContain(student1);
    expect(studentsList).toContain(student2);
    expect(studentsList.length).toBe(2);
  });
});