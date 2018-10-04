import './style.scss';

class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person : Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}


document.addEventListener('DOMContentLoaded', () => {

  let user = new Student("Jane", "M.", "User");
  let target : HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("target");
  target.textContent = greeter(user);
  
});
