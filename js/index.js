// Add animation to service and price cards on hover

const cards = document.querySelectorAll(".service-card, .price-card");

cards.forEach(card => {

  card.addEventListener("mouseenter", () => {

    card.style.transform = "scale(1.1

)";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "scale(1)";

  });

});

