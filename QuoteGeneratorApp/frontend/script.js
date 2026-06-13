const quotes = [
    "Believe in yourself.",
    "Never give up.",
    "Success comes from hard work.",
    "Stay positive.",
    "Dream big."
];

function getQuote(){

    let random =
    quotes[Math.floor(Math.random() * quotes.length)];

    document.getElementById("quote").innerText =
    random;

    let li = document.createElement("li");

    li.textContent = random;

    document.getElementById("history")
    .appendChild(li);
}