//React.ts
namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
        experienceTeachingReact?: number;   
    }

    export class Subject {
        teacher: Teacher;

        constructor(teacher?: Teacher) {
            this.teacher = teacher || { firstName: '', lastName: '' };
        }
    }
}

export class React extends Subjects.Subject {
    constructor(teacher?: Subjects.Teacher) {
        super(teacher);
    }

    getRequirements(): string {
        return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
        if (this.teacher && this.teacher.experienceTeachingReact && this.teacher.experienceTeachingReact > 0) {
            return `Available Teacher: ${this.teacher.firstName}`;
        }
        return 'No available teacher';
    }
}


