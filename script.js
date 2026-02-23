// Subtle touch animation for mobile
document.querySelectorAll(".glass-card").forEach(card => {
  card.addEventListener("touchstart", () => {
    card.style.transform = "scale(0.98)";
  });

  card.addEventListener("touchend", () => {
    card.style.transform = "scale(1)";
  });
});
