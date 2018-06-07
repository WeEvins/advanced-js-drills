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


function printFruits() {
    let favFruit = fruits[2];
    console.log(fruits[1]);

    function printFavFruit() {
        console.log(favFruit);
        printFavFruit();
    }
};

printFruits();
let leastFav = fruits[0];
console.log(leastFav);


alertName();
function alertName(){
    console.log(`Hello ${name}`);
}

displayAlert();
function displayAlert(){
    alert (`Danger Will Robinson!`)
}