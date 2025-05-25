export const cpp = 'Cpp Subjects';
export const java = 'Java Subjects';
export const react = 'React Subjects';

// Update the import path if the correct location is './subjects'
import { Cpp, Java, React } from './js/subjects/Subjects';
export const cTeacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10
};

console.log('C++');
const cppSubjects = new Cpp();
cppSubjects.teacher = cTeacher;
console.log(cppSubjects.getRequirements());
console.log(cppSubjects.getAvailableTeacher());

console.log('Java');
const javaSubjects = new Java();
javaSubjects.teacher = cTeacher;
console.log(javaSubjects.getRequirements());
console.log(javaSubjects.getAvailableTeacher());

console.log('React');
const reactSubjects = new React();
reactSubjects.teacher = cTeacher;
console.log(reactSubjects.getRequirements());
console.log(reactSubjects.getAvailableTeacher());