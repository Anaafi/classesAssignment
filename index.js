
class Student{
    constructor(name, age, score, courses){
        this.name = name;
        this.age = age;
        this.score = score;
        this.courses = courses;
    }
    name(){
        return this.name;
    }
    age(){
        return this.age;
    }
    score(){
        return this.score;
    }
    increaseAge(){
        this.age++;
    }
    addCourse(course){
        this.courses.push(course);
    }
}

const firstStudent = new Student("Raphael", 45, 80, ["English"]);

console.log(firstStudent.name);
console.log(firstStudent.age);
console.log(firstStudent.score);

firstStudent.increaseAge();
console.log(firstStudent.age);

firstStudent.addCourse("Math");
console.log(firstStudent.courses);