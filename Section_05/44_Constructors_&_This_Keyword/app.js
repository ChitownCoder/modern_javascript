//  Person constructor
function Person(name, dob) {
  this.name = name;
  //   this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

// const tony = new Person("tony", 48);
// const joe = new Person("joe", 51);

// console.log(joe.age);

const ash = new Person("Ashleigh", "9/10/2008");

console.log(ash.calculateAge());
