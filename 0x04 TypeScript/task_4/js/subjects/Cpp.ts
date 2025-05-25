/// <reference path="./Subjects.ts" />

namespace Subjects {
    export class Subjects {
        teacher!: Teacher;
        static Subject: any;
    }

    export interface Teacher {
        experienceTeachingC?: number;
    }

    export class Cpp extends Subjects.Subject {
        teacher: Teacher;

        constructor(teacher?: Teacher) {
            super();
            this.teacher = teacher || { firstName: '', lastName: '' };
        }

        getRequirements(): string {
            return 'Here is the list of requirements for Cpp';
        }

        getAvailableTeacher(): string {
            if (this.teacher && this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return 'No available teacher';
        }
    }
}