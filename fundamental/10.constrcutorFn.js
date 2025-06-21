function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = () => {
        if (this.age >= 18) {
            return true;
        } else {
            return false;
        }
    }
}

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
        this.canDrive = () => {
            if (this.age >= 18) {
                return true;
            } else {
                return false;
            }
        }
    }
}

let person1 = new Person('John', 45);
let person2 = new Person('Alice', 30);

let person3 = new PersonClass('Kirito', 16);


console.log({
  ...person1,
  canDrive: person1.canDrive()
});
console.log({
  ...person2,
  canDrive: person2.canDrive()
});
console.log({
  ...person3,
  canDrive: person3.canDrive()
});