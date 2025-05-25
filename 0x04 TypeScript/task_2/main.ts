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

interface createEmployeeFunction {
    (salary: number | string): Director | Teacher;
}

const createEmployee: createEmployeeFunction = (salary) =>{

    const salary_converted = typeof salary === "string" ? parseInt(salary): salary;

    if (salary_converted < 500){
        return new Teacher();
    }else{
        return new Director();
    }

}

const isDirector = (employee: Director | Teacher): employee is Director => {
    return employee instanceof Director;
}

const executeWork = (employee: Director | Teacher): string => {
    if(isDirector(employee))
    {
        return employee.workDirectorTasks();
    }else {
        return employee.workTeacherTasks();
    }
}

type Subjects = "Math" | "History";

const teachClass = (todayClass: Subjects) => {
    return todayClass === "Math" ? "Teaching Math" : "Teaching History";
}
