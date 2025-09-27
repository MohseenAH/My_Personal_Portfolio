document.addEventListener("DOMContentLoaded", () => {
  // ScrollReveal effect
  ScrollReveal().reveal(".reveal", {
    distance: "50px",
    duration: 1000,
    easing: "ease-out",
    origin: "bottom",
    interval: 200,
    reset: false,
  });

  // Hamburger Menu Toggle
  const hamburger = document.getElementById("hamburger");
  const navMobile = document.getElementById("nav-links-mobile");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMobile.classList.toggle("show");
  });

  // Close mobile menu on link click
  document.querySelectorAll("#nav-links-mobile a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMobile.classList.remove("show");
    });
  });

  // Typed.js effect
  new Typed(".auto-type", {
    strings: ["Mohseen Ali", "a Web Developer", "a Learner"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    showCursor: true,
    cursorChar: "|",
  });
});
