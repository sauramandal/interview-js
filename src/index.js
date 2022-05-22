import { promiseAllExample } from "./promises";
// Call, apply, bind
let person = {
  firstName: "Adam",
  lastName: "Milner",
  printFullName: function (age, company) {
    return (
      this.firstName +
      " " +
      this.lastName +
      " " +
      age +
      " years, works at " +
      company
    );
  }
};

let p1 = person.printFullName.call(person, "28", "Microsoft");
console.log(p1);

// In order to borrow functions and use it with other objects we use call method
let otherPerson = {
  firstName: "James",
  lastName: "Milner"
};
// The call method invokes a function with a given 'this' value and
// arguments provided
let p2 = person.printFullName.call(otherPerson, "27", "Microsoft");
console.log(p2);
// The apply method invokes a function with a given 'this' and also arguments as an array
let p3 = person.printFullName.apply(
  { firstName: "Saura", lastName: "Mandal" },
  ["27", "Netflix"]
);
console.log(p3);
// The bind method returns a copy of the function which can be invoked later
let p4 = person.printFullName.bind({ firstName: "Aryama", lastName: "Sarkar" });
console.log(p4("23", "Tesla"));

promiseAllExample();
