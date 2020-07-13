const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Marcin', 'Romek', 'Jakub', 'Wojciech', 'Michał', 'Lucjan', 'Filip', 'Piotr', 'Zbigniew'];
const femaleNames = ['Marta', 'Wioletta', 'Magdalena', 'Katarzyna', 'Dorota', 'Maja', 'Lucyna', 'Karolina'];
const lastNames = ['Waligóra', 'Dąbrowski', 'Chreptowicz', 'Majerowski', 'Sadowski', 'Szołajski'];
const ageMin = 18;
const ageMax = 78;

const randChoice = arr => arr[Math.floor(Math.random() * arr.length)];

const people = [];

for (let i=0; i<=20; i++) {

  const person = {};

  const getGender = randChoice(genders);
  person.gender = getGender;

  if(getGender === 'M') {
    person.firstName = randChoice(maleNames);
  } else {
    person.firstName = randChoice(femaleNames);
  }

  person.lastName = randChoice(lastNames);
  person.age = Math.floor(Math.random() * (ageMax-ageMin))+ageMin;

  people.push(person);
}

const peopleJson = JSON.stringify(people);

fs.writeFile('people.json', peopleJson, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
