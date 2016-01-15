/// <reference path="_reference.ts" />

import Person = objects.Person;
import Student = objects.Student;

console.log("Game Started...");

var person: Person = new Person("Michael");
person.speak();


var student: Student = new Student("James",1234);
student.speak();
student.studies();
