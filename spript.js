//Arrays containing different pieces of data
const starters = [
    "You are destined to",
    "Today is a great day to",
    "Embrance the opportunity to",
    "Unlock your potential and",
    "Find joy in",
];

const actions = [
    "explore new horizons",
    "learn something new",
    "spread kindness",
    "achieve your goals",
    "overcome obstacles",
];

const conclusions = [
    "and make a difference.",
    "and see the beauty around you.",
    "and inspire others.",
    "and create something amazing.",
    "and live life to the fullest.",
]

//Function to generate a random message

const generateMessage = () => {
    const starterIndex = Math.floor(Math.random() * starters.length);
    const actionIndex = Math.floor(Math.random() * actions.length);
    const conclusionIdex = Math.floor(Math.random() * conclusions.length);

    const message = starters[starterIndex] + " " + actions[actionIndex] + " " + conclusions[conclusionIdex];
    return message;
}

console.log(generateMessage());


const generateBTn = document.getElementById('generate-btn');
const messageDisplay = document.getElementById('message');

//Event listener for the button click 
generateBTn.addEventListener('click',function (){

    const generatedMessage = generateMessage();
    messageDisplay.textContent = generatedMessage;
})

