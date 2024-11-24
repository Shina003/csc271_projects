function updateTitle() {
    let title = document.getElementById("title");
    title.innerHTML += "<h1>FurEverHome</h1>";
    title.innerHTML += "<h2>Where Every Paw Finds Its Place</h2>";
    title.innerHTML += "<hr>";
}


function updateCard(cardNumber, image, name, breed, age, location, fee) {
    let card = document.getElementsByClassName("card")[cardNumber];
    card.innerHTML += `<img src="images/${image}" style="width:100%">`;
    card.innerHTML += `<h3><b>${name}</b></h3>`;
    card.innerHTML += `<p>${breed}</p>`;
    card.innerHTML += `<p>${age}</p>`;
    card.innerHTML += `<p>${location}</p>`;
    card.innerHTML += `<p>Adoption Fee: $${fee}</p>`;
}


function createPetCard(pet, ageFee, breedFee) {
    updateCard(pet.cardNumber, pet.image, pet.name, pet.breed, pet.age, pet.location, pet.calculateAdoptionFee(ageFee,breedFee));
}

updateTitle();

let oliver = {
    cardNumber: 0,
    image: "oliver.jpeg",
    name: "Oliver",
    breed: "Domestic Short Hair",
    age: "4 months",
    location: "South Kingstown, RI",
    calculateAdoptionFee: function(ageFee, breedFee) {
        let baseFee = 100;
        return baseFee + ageFee + breedFee;
    }
};

let buddy = {
    cardNumber: 1,
    image: "buddy.jpeg",
    name: "Buddy",
    breed: "Golden Retriever",
    age: "6 months",
    location: "Westerly, RI",
    calculateAdoptionFee: function(ageFee, breedFee) {
        let baseFee = 100;
        return baseFee + ageFee + breedFee;
    }
};

let toffee = {
    cardNumber: 2,
    image: "toffee.jpeg",
    name: "Toffee",
    breed: "Labrador",
    age: "1 year",
    location: "Providence, RI",
    calculateAdoptionFee: function(ageFee, breedFee) {
        let baseFee = 100;
        return baseFee + ageFee + breedFee;
    }
};

let charlie = {
    cardNumber: 3,
    image: "charlie.jpeg",
    name: "Charlie",
    breed: "Cocker Spaniel",
    age: "9 months",
    location: "East Greenwich, RI",

    calculateAdoptionFee: function(ageFee, breedFee) {
        let baseFee = 100;
        return baseFee + ageFee + breedFee;
    }

};





function Pet(cardNumber, image, name, breed, age, location) {
    this.cardNumber = cardNumber;
    this.image = image;
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.location = location;
    this.calculateAdoptionFee = function (ageFee, breedFee) {
        let baseFee = 100;
        return baseFee + ageFee + breedFee;
    }
}

let fluffy = new Pet(4, "fluffy.webp", "Fluffy", "Siamese", "11 months", "Warwick, RI");
let peanut = new Pet(5, "peanut.jpeg", "Peanut", "Maltese", "10 months", "Johnston, RI");
let goofy = new Pet(6, "goofy.avif", "Goofy", "Tabby", "    7 months", "Cranston, RI");
let luna = new Pet(7, "luna.webp", "Luna", "Border Collie", "12 months", "Newport, RI");
console.log(fluffy);
//fluffy.fee(50, 30);
//peanut.fee(50, 0);
//goofy.fee(50, 30);
//luna.fee(50, 0);

createPetCard(oliver, 50, 0);
createPetCard(buddy, 50, 20);
createPetCard(toffee, 50, 30);
createPetCard(charlie, 50, 30);

createPetCard(fluffy, 50, 30);
createPetCard(peanut, 50, 0);
createPetCard(goofy, 50, 30);
createPetCard(luna, 50, 0);
