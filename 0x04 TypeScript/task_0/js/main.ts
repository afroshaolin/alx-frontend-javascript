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

console.log(student1);
console.log(student2);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeStudent: false
// lastName: "Doe"
// location: "London"