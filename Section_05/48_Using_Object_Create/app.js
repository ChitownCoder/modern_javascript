const personPrototypes = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  },
};

const mary = Object.create(personPrototypes);
mary.firstName = "Mary";
mary.lastName = "Williams";
mary.age = 30;

mary.getsMarried("Thompson");

console.log(mary.greeting());

const henry = Object.create(personPrototypes, {
  firstName: { value: "Henry" },
  lastName: { value: "Howard" },
  age: { value: 87 },
});

console.log(henry);

console.log(henry.greeting());
