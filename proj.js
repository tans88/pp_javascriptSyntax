import fetch from 'node-fetch';
import readline from 'readline'

// create an instance of readline.Interface
const rl = readline.createInterface({
    input: process.stdin,   // reads input 
    output: process.stdout  // outputs text to console
});

// function to retrieve random space fact
async function getRandomSpaceFact(){
    const response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/');
    const data = await response.json();

    // select random body
    const randomIndex = Math.floor(Math.random() * data.bodies.length);
    const randomBody = data.bodies[randomIndex];

    // display info
    console.log();
    console.log();
    console.log("Your random celestial body fact!")
    console.log(`Name: ${randomBody.englishName}`);
    console.log(`Type: ${randomBody.bodyType}`);
    console.log(`Density: ${randomBody.density}`);
    console.log(`Gravity: ${randomBody.gravity}`);
    getUserInput();
}

// function to prompt user input
function getUserInput(){
    // prompt user for question using rl instance 
    rl.question("Enter: ", (answer) => {
        if (answer.toLowerCase() == "yes"){
            getRandomSpaceFact();
        } else if (answer.toLowerCase() == "stop"){
            console.log("Goodbye!");
            rl.close();
        } else{
            console.log("Invalid input. Please type 'yes' or 'stop'.");
            getUserInput();
        }
    });
}

console.log("Hello and welcome to the random celestial body generator!");
console.log("A celestial body is a natural object that exists in space. This includes planets, moons, asteroids, stars, comets, galaxies, and more!");
console.log("To generate a random celestial body, type 'yes.' If you want to escape, type 'stop.'");
getUserInput();