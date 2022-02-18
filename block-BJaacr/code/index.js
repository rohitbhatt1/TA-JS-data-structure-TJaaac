/*
Game of Thrones : Houses And People's Name
Try to first understand how Array in Objects & Objects in Array are arranged in this example.
Only when you don't get it by yourself, comeback again and read the hint
*/

// Write code for the following problems:
console.log(got);

// You have access to a variable named `got`. Which comes from `data.js` file

/*
Hint: (Structure of got variable)
  - got variable is an Object which has one key: `houses`
  - `houses` is an array of multiple house
  - Each house is an Object which has two keys: "name" and "people"
  - people is an array of all persons living in that particular house
  - And, each person is an object with "name" and "description" properties
*/

// 1. Log the value of key "houses"
console.log(got.houses);

// 2. Log the length of the "houses" key

console.log(got.houses.length);

// 3. Log the name of all houses in got one by one

for (let house of got.houses){
  console.log(house.name)
}
//  Starks
//  Lannisters?

// 4. Log the name of all the people in house Starks (index 0) one by one

for(let i = 0; i < got.houses[0].people.length;i++){

  console.log(got.houses[0].people[i].name);
}

// 5. Log the name of all the people in house Lannisters (index 1) one by one

for(let i = 0; i < got.houses[1].people.length;i++){

  console.log(got.houses[1].people[i].name);
}

// 6. Log the description of all the people in house Lannisters (index 1) one by one

for(let i = 0; i < got.houses[0].people.length;i++){

  console.log(got.houses[0].people[i].description);
}

// 7. Log the name and description of all the people in house Lannisters (index 1) one by one like `I am [name] and my bio is [description]`

   for(let i = 0; i < got.houses[1].people.length;i++){

        console.log(got.houses[1].people[i].name);
    } 

// 8. Log the name and description of all the people in house Starks (index 0) one by one like `I am [name] and my bio is [description]`

   for(let i = 0; i < got.houses[0].people.length;i++){

        console.log(got.houses[0].people[i].description);
    }

// 9. Log the name and description of the people in house Starks whose name is `Robb Stark`

for (let i = 0; i < got.houses[1].people.length;i++){
  if (got.houses[0].people[i].name === 'Robb Stark')

  console.log(`I am ${got.houses[0].people[i].name} and my bio is ${got.houses[0].people[i].description}`);
}


// 10. Log the name and description of the people in house Lannisters whose name is `Tywin Lannister`

   
for (let i = 0; i < got.houses[1].people.length; i++) {
  if (got.houses[1].people[i].name === `Tywin Lannister`) {
    console.log(
      `I am ${got.houses[1].people[i].name} and my bio is ${got.houses[0].people[i].description}`
    );
  }
}

// 11. Push the name of the houses in an array named `houseNames` and Log the array

let houseNames = [];
for (let house of got.houses) {
  houseNames.push(house.name);
}
console.log(houseNames);


// 12. Log the size of people in Starks house


console.log(got.houses[0].people.length, "members in House of Starks");


// 13. Log the size of people in Lannisters house

console.log(got.houses[1].people.length, "members in House of Lannisters");

// 14. Add the name and size of people in an object like {Starks: 4, Lannisters: 6} and log the object

let obj = {};
for(let house of got.houses){
    obj[house.name] = house.people.length;
}
console.log(obj);


// 15. Log the name of all the people of all the houses in got one by one

for (let j = 0; j < got.houses.length; j++) {
  for (let i = 0; i < got.houses[j].people.length; i++){
    console.log(got.houses[j].people[i].name);
  }
}
/*
for(let house of got.houses){
    for (let people of house.people){
        console.log(people.name);
    }
}
*/

// 16. Push all names into a new array named `allPeople` and log the value array.

let allPeople = [];
for (let house of got.houses) {
  for (let people of house.people) {
    allPeople.push(people.name);
  }
}

// 17. Log the value and length of `allPeople` array created above

console.log(allPeople, "New Arryay");
console.log(allPeople.length,"length of New Array");

// 18. Push all descriptions into an array named `allDescription`

let allDescription = [];
for (let house of got.houses){
    allDescription.push(house.name)
};
console.log(allDescription);

// 19. Log the value and length `allDescription`

console.log(allDescription, "is a new Array");

// 20. Only the the description whose length is more than 30. (use .length property on string to get the length)

for (let dec of allDescription){
  if (dec.length > 30) {
  }

    console.log(dec, "Length is ", dec.length);
}
/*
for (let description of allDescription) {
  if (description.length > 30) {
    console.log(description);
  }
       console.log(description);
}
*/ 