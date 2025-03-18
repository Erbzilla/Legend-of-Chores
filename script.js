document.getElementById("shuffle").addEventListener("click", function() {
    let container = document.getElementById("card-container");
    let cards = Array.from(container.children);
    cards.sort(() => Math.random() - 0.5);
    cards.forEach(card => container.appendChild(card));
});

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", function() {
        card.classList.toggle("flipped");
    });
});
