const bgImages = [
    "bg2.jpeg"
]
const randomNumber = Math.floor(Math.random()*bgImages.length);
const chosenImage = bgImages[randomNumber];
document.body.style.backgroundImage = `url('img/${chosenImage}')`;


