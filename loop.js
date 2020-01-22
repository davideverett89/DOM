const animals = ["Dog", "Cat", "Fish", "Bird", "Pig"];


const target = document.getElementById("target");
let orderedList = document.createElement("ol");
target.appendChild(orderedList);


// const animalLoop = () => {
//     for (let i = 0; i < animals.length; i++) {
//         let currentAnimal = animals[i];
//         console.log(currentAnimal);
//         let listItem = document.createElement("li");
//         listItem.innerHTML = currentAnimal;
//         orderedList.appendChild(listItem);
//     }
// }

// const animalLoop = () => {
//     let string = "";
//     for (let i = 0; i < animals.length; i++) {
//         string += `<h1>${animals[i]}</h1>`
//     }
//     console.log(string);
// }



// animalLoop();


const instructors = [
    {
        firstName: "Zoe",
        lastName: "Ames",
    },
    {
        firstName: "Mary",
        lastName: "West",
    },
    {
        firstName: "Luke",
        lastName: "Lancaster"
    }
];

const nameLoop = () => {
    let string = "";
    for (let i = 0; i < instructors.length; i++) {
        string += `<h2>${instructors[i].firstName} ${instructors[i].lastName}</h2>`;
    }
    console.log(string);
}
nameLoop();