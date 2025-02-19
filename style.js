function toggleMenu() {
    const nav = document.querySelector("header nav");
    const hamburger = document.querySelector(".hamburger-icon");
    
    nav.classList.toggle("open");
    hamburger.classList.toggle("open");
  }

  const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const nav = document.querySelector("header nav");
    const hamburger = document.querySelector(".hamburger-icon");
    nav.classList.remove("open");
    hamburger.classList.remove("open");
  });
});