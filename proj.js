import fetch from 'node-fetch';

// function to retrieve random space fact
async function getRandomSpaceFact(){
    const response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/');
    const data = await response.json();

    // select random body
    const randomIndex = Math.floor(Math.random() * data.bodies.length);
    const randomBody = data.bodies[randomIndex];

    // display info 
    console.log(`Name: ${randomBody.englishName}`);
    console.log(`Type: ${randomBody.bodyType}`);
    console.log(`Density: ${randomBody.density}`);
    console.log(`Gravity: ${randomBody.gravity}`);
}

getRandomSpaceFact();