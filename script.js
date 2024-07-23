function flipCard(card) {
  const grid = document.getElementById("grid");
  const isExpanded = card.classList.contains("is-expanded");
  const allCards = document.querySelectorAll(".card");

  allCards.forEach((c) => {
    if (c !== card) {
      c.parentElement.classList.toggle("hidden", !isExpanded);
    }
  });

  card.classList.toggle("is-expanded", !isExpanded);
}
