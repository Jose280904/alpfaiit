const menu = document.querySelector(".menu-btn");
const links = document.querySelector(".nav-links");

if (menu && links) {
  menu.addEventListener("click", () => {
    const open = links.classList.toggle("open");

    menu.setAttribute("aria-expanded", open);
    menu.textContent = open ? "×" : "☰";
  });
}

// Reveal elements as the user scrolls down
document.querySelectorAll(".reveal").forEach((element) => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    },
    {
      threshold: 0.14,
    }
  );

  observer.observe(element);
});

// Automatically display the current year
document.querySelectorAll("#year").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

// Highlight the current page in the navigation
const currentPage =
  window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-links a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});