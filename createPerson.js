const createPerson = (name, age, surname = "N/A") => ({
  name,
  age,
  surname,
  introduce: () => {
    console.log(`Hello, I am ${name}${surname === "N/A" ? "" : " " + surname}, and I'm ${age} years old.`)
  }
});

const person1 = createPerson("Aryan", 22, "Verma");
const person2 = createPerson("Aditya", 17);
const person3 = createPerson("Palak", 20);

const people = {};

const createPeople = (...args) => {
  for(let [i, person] of args.entries()){
    const name = "person " + i;
    people[name] = person
  }
}

createPeople(person1, person2, person3);

console.log(people);

for(let person in people){
  people[person].introduce();
}