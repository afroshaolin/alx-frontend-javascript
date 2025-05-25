export interface Teacher {
  firstName: string;
  lastName: string;
  experienceTeachingC?: number;
  experienceTeachingJava?: number;
  experienceTeachingReact?: number;
}
export interface Subject {
  getRequirements(): string;
  getAvailableTeacher(): string;
}
export class Subjects implements Subject {
  getRequirements(): string {
    return 'No requirements specified';
  }

  getAvailableTeacher(): string {
    return 'No available teacher';
  }
}
export class Cpp extends Subjects {
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
export class Java extends Subjects {
  teacher: Teacher;

  constructor(teacher?: Teacher) {
    super();
    this.teacher = teacher || { firstName: '', lastName: '' };
  }

  getRequirements(): string {
    return 'Here is the list of requirements for Java';
  }

  getAvailableTeacher(): string {
    if (this.teacher && this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
      return `Available Teacher: ${this.teacher.firstName}`;
    }
    return 'No available teacher';
  }
}
export class React extends Subjects {
  teacher: Teacher;

  constructor(teacher?: Teacher) {
    super();
    this.teacher = teacher || { firstName: '', lastName: '' };
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