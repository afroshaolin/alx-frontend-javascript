import { describe, it, expect } from '@jest/globals';

// Re-declare the classes and functions for testing
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }
    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    return 'Teaching History';
}

describe('Director and Teacher classes', () => {
    it('Director methods return correct strings', () => {
        const director = new Director();
        expect(director.workFromHome()).toBe('Working from home');
        expect(director.getCoffeeBreak()).toBe('Getting a coffee break');
        expect(director.workDirectorTasks()).toBe('Getting to director tasks');
    });

    it('Teacher methods return correct strings', () => {
        const teacher = new Teacher();
        expect(teacher.workFromHome()).toBe('Cannot work from home');
        expect(teacher.getCoffeeBreak()).toBe('Cannot have a break');
        expect(teacher.workTeacherTasks()).toBe('Getting to work');
    });
});

describe('createEmployee', () => {
    it('returns Teacher if salary is a number less than 500', () => {
        expect(createEmployee(200)).toBeInstanceOf(Teacher);
    });

    it('returns Director if salary is a number 500 or more', () => {
        expect(createEmployee(1000)).toBeInstanceOf(Director);
    });

    it('returns Director if salary is a string', () => {
        expect(createEmployee('$500')).toBeInstanceOf(Director);
    });
});

describe('isDirector', () => {
    it('returns true for Director', () => {
        const director = new Director();
        expect(isDirector(director)).toBe(true);
    });

    it('returns false for Teacher', () => {
        const teacher = new Teacher();
        expect(isDirector(teacher)).toBe(false);
    });
});

describe('executeWork', () => {
    it('calls workDirectorTasks for Director', () => {
        const director = new Director();
        expect(executeWork(director)).toBe('Getting to director tasks');
    });

    it('calls workTeacherTasks for Teacher', () => {
        const teacher = new Teacher();
        expect(executeWork(teacher)).toBe('Getting to work');
    });
});

describe('teachClass', () => {
    it('returns "Teaching Math" for Math', () => {
        expect(teachClass('Math')).toBe('Teaching Math');
    });

    it('returns "Teaching History" for History', () => {
        expect(teachClass('History')).toBe('Teaching History');
    });
});