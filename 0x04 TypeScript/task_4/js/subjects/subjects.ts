import { Teacher } from './teacher';

namespace Subjects {
    export class Subjects {
        teacher!: Teacher;
        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}

export class Cpp extends Subjects.Subjects {
    getRequirements() {
        return 'Here is the list of requirements for Cpp';
    }
    getAvailableTeacher() {
        return this.teacher && (this.teacher as any).experienceTeachingC
            ? `Available Teacher: ${this.teacher.firstName}`
            : 'No available teacher';
    }
}

export class Java extends Subjects.Subjects {
    getRequirements() {
        return 'Here is the list of requirements for Java';
    }
    getAvailableTeacher() {
        return this.teacher && (this.teacher as any).experienceTeachingJava
            ? `Available Teacher: ${this.teacher.firstName}`
            : 'No available teacher';
    }
}

export class React extends Subjects.Subjects {
    getRequirements() {
        return 'Here is the list of requirements for React';
    }
    getAvailableTeacher() {
        return this.teacher && (this.teacher as any).experienceTeachingReact
            ? `Available Teacher: ${this.teacher.firstName}`
            : 'No available teacher';
    }
}

export class Subject extends Subjects.Subjects {
    getRequirements(): string {
        return 'Here is the list of requirements for the subject';
    }

    getAvailableTeacher(): string {
        return 'No available teacher';
    }
}