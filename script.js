/* =========================
   PRELOADER
========================= */

window.addEventListener("load", () => {
  const loader = document.querySelector(".preloader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 1200);
});

/* =========================
   TYPING ANIMATION
========================= */

const words = [
  "ECE Student",
  "Embedded Engineer",
  "Hardware Enthusiast",
  "Circuit Designer",
  "Future Innovator"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.querySelector(".typing-text");

function typeEffect() {

  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingText.textContent =
      currentWord.substring(0, charIndex--);
  } else {
    typingText.textContent =
      currentWord.substring(0, charIndex++);
  }

  let speed = isDeleting ? 60 : 120;

  if (!isDeleting && charIndex === currentWord.length) {
    speed = 1500;
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

/* =========================
   DARK / LIGHT THEME
========================= */

const themeToggle =
  document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    themeToggle.innerHTML = "🌙";
  } else {
    themeToggle.innerHTML = "☀";
  }
});

/* =========================
   INTERACTIVE CURSOR GLOW
========================= */

const cursorGlow =
  document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

  cursorGlow.style.left = `${e.clientX}px`;

  cursorGlow.style.top = `${e.clientY}px`;
});

/* =========================
   SMOOTH BUTTON ANIMATION
========================= */

const buttons =
  document.querySelectorAll(".btn");

buttons.forEach((button) => {

  button.addEventListener("mouseenter", () => {

    button.style.transform =
      "translateY(-5px) scale(1.05)";
  });

  button.addEventListener("mouseleave", () => {

    button.style.transform =
      "translateY(0px) scale(1)";
  });
});

/* =========================
   PROFILE IMAGE FLOAT EFFECT
========================= */

const profileImage =
  document.querySelector(".profile-img");

profileImage.addEventListener("mousemove", (e) => {

  const rect = profileImage.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = -(y - centerY) / 12;
  const rotateY = (x - centerX) / 12;

  profileImage.style.transform =
    `perspective(1000px)
     rotateX(${rotateX}deg)
     rotateY(${rotateY}deg)
     scale(1.08)`;
});

profileImage.addEventListener("mouseleave", () => {

  profileImage.style.transform =
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
});

/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const homeContent =
  document.querySelector(".home-content");

window.addEventListener("scroll", () => {

  let scrollY = window.scrollY;

  homeContent.style.transform =
    `translateY(${scrollY * 0.05}px)`;
});
