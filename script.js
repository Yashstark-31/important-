const messages = [
"You are amazing ✨",
"You matter a lot ❤️",
"You deserve love 🌸",
"The world needs you 🌍",
"You are stronger than you think 💪"
]

function nextMsg(){

let r = Math.floor(Math.random()*messages.length)

document.getElementById("msg").innerText = messages[r]

}