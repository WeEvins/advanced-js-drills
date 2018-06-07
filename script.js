name = 'Warryn';
var name;
console.log(name);

setName();
function setName() {
    var name = 'Warryn';
    console.log(name);
}

// here is the second part of the lab

let fruits = ['banana', 'apple', 'orange']
let favFruit;

function printFruits(){
    favFruit = fruits[0];
    console.log(fruits[1]);
}

function printFaveFruit(){
    console.log(favFruit);
    
}

printFruits();
printFaveFruit();