// =========================
// PRELOADER
// =========================

window.addEventListener("load", () => {

  const preloader =
    document.querySelector(".preloader");

  setTimeout(() => {

    preloader.classList.add("hide");

  }, 1200);

});

// =========================
// TYPING ANIMATION
// =========================

const words = [

  "ECE Student",
  "Embedded Systems Enthusiast",
  "Circuit Designer",
  "Future Engineer",
  "Tech Innovator"

];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText =
  document.querySelector(".typing-text");

function typeEffect(){

  const currentWord =
    words[wordIndex];

  if(isDeleting){

    charIndex--;

  }else{

    charIndex++;

  }

  typingText.textContent =

    currentWord.substring(0,charIndex);

  let speed = isDeleting ? 60 : 120;

  if(
    !isDeleting &&
    charIndex === currentWord.length
  ){

    speed = 2500;

    isDeleting = true;

  }else if(
    isDeleting &&
    charIndex === 0
  ){

    isDeleting = false;

    wordIndex =
      (wordIndex + 1) % words.length;

    speed = 300;

  }

  setTimeout(typeEffect, speed);

}

typeEffect();

// =========================
// THEME TOGGLE
// =========================

const themeToggle =
  document.querySelector(".theme-toggle");

themeToggle.addEventListener("click",()=>{

  document.body.classList.toggle("light-theme");

  if(
    document.body.classList.contains(
      "light-theme"
    )
  ){

    themeToggle.innerHTML = "🌙";

  }else{

    themeToggle.innerHTML = "☀";

  }

});

// =========================
// CURSOR GLOW EFFECT
// =========================

const cursorGlow =
  document.querySelector(".cursor-glow");

document.addEventListener(
  "mousemove",
  (e)=>{

    cursorGlow.style.left =
      `${e.clientX}px`;

    cursorGlow.style.top =
      `${e.clientY}px`;

  }
);

// =========================
// ACTIVE NAVBAR LINKS
// =========================

const sections =
  document.querySelectorAll("section");

const navLinks =
  document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

  let current = "";

  sections.forEach(section=>{

    const sectionTop =
      section.offsetTop;

    if(
      scrollY >= sectionTop - 200
    ){

      current =
        section.getAttribute("id");

    }

  });

  navLinks.forEach(link=>{

    link.classList.remove("active");

    if(
      link.getAttribute("href")
      .includes(current)
    ){

      link.classList.add("active");

    }

  });

});

// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements =
  document.querySelectorAll(

    ".about-card,\
     .skill-card,\
     .project-card,\
     .contact-card,\
     .timeline-content,\
     .certification-card,\
     .internship-card"

  );

function revealOnScroll(){

  revealElements.forEach((element)=>{

    const windowHeight =
      window.innerHeight;

    const revealTop =
      element.getBoundingClientRect().top;

    const revealPoint = 100;

    if(
      revealTop <
      windowHeight - revealPoint
    ){

      element.classList.add("show");

    }

  });

}

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();

// =========================
// FLOATING IMAGE EFFECT
// =========================

const profileImage =
  document.querySelector(".home-image img");

if(profileImage){

  profileImage.addEventListener(
    "mousemove",
    (e)=>{

      const rect =
        profileImage.getBoundingClientRect();

      const x =
        e.clientX - rect.left;

      const y =
        e.clientY - rect.top;

      const centerX =
        rect.width / 2;

      const centerY =
        rect.height / 2;

      const rotateX =
        -(y - centerY) / 15;

      const rotateY =
        (x - centerX) / 15;

      profileImage.style.transform =

        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         scale(1.05)`;

    }

  );

  profileImage.addEventListener(
    "mouseleave",
    ()=>{

      profileImage.style.transform =

        `perspective(1000px)
         rotateX(0deg)
         rotateY(0deg)
         scale(1)`;

    }

  );

}

// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll(

  'a[href^="#"]'

).forEach(anchor=>{

  anchor.addEventListener(
    "click",
    function(e){

      e.preventDefault();

      document.querySelector(

        this.getAttribute("href")

      ).scrollIntoView({

        behavior:"smooth"

      });

    }

  );

});
