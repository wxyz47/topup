// Toggle menu untuk mobile
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Scroll carousel
function scrollCarousel(direction) {
  const carousel = document.getElementById("gameCarousel");
  const scrollAmount = 300;
  carousel.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth",
  });
}

// Accordion FAQ
const accordionHeaders = document.querySelectorAll(".accordion-header");
accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const body = header.nextElementSibling;
    body.style.display = body.style.display === "block" ? "none" : "block";
  });
});

// Kategori filter
const kategoriBtns = document.querySelectorAll(".kategori-btn");
const gameCards = document.querySelectorAll(".game-card");

kategoriBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".kategori-btn.active").classList.remove("active");
    btn.classList.add("active");

    const kategori = btn.dataset.kategori;
    gameCards.forEach((card) => {
      if (kategori === "all" || card.dataset.kategori === kategori) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Search Game
function searchGame() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  gameCards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(keyword) ? "block" : "none";
  });
}

// Newsletter form (placeholder only)
document.querySelector(".newsletter-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Terima kasih telah berlangganan!");
});
