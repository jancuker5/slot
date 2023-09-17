const symbols = ["SAHAR", "ASU", "KONTOL", "BILANG", "TAI", "ANAK", "ENAK"];
const reel1 = document.getElementById("reel1");
const reel2 = document.getElementById("reel2");
const reel3 = document.getElementById("reel3");
const spinButton = document.getElementById("spin-button");

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function spinReels() {
    reel1.textContent = getRandomSymbol();
    reel2.textContent = getRandomSymbol();
    reel3.textContent = getRandomSymbol();
}

spinButton.addEventListener("click", function () {
    spinReels();
});
