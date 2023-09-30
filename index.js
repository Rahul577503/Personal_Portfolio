
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector("#nav-list");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
  });




  // Close the navigation when clicking outside of it
  document.addEventListener("click", (event) => {
    const isHamburgerClicked = hamburger.contains(event.target);
    const isNavListClicked = navList.contains(event.target);

    if (!isHamburgerClicked && !isNavListClicked) {
      hamburger.classList.remove("active");
      navList.classList.remove("active");
    }
  });

  // Close the navigation when clicking on a nav li or a link
  document.querySelectorAll(".nav-link, #nav-list li").forEach((element) => {
    element.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navList.classList.remove("active");
    });
  });

  // Typing Animation
  const textElement = document.querySelector(".text");
  const words = ["Full-Stack Developer", "Programmer"];
  let wordIndex = 0;
  let letterIndex = 0;
  let direction = 1;

  function type() {
    if (direction === 1) {
      if (letterIndex < words[wordIndex].length) {
        textElement.textContent += words[wordIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(type, 100);
      } else {
        direction = -1;
        setTimeout(type, 1000);
      }
    } else if (direction === -1) {
      if (letterIndex > 0) {
        textElement.textContent = words[wordIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(type, 50);
      } else {
        direction = 1;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
      }
    }
  }

  type();

  // Scroll to Top Button
  const scrollToTopButton = document.getElementById('scrollToTopButton');

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });

  scrollToTopButton.addEventListener('click', scrollToTop);
});


