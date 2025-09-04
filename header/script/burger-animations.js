document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");

  function handleResize() {
    if (window.innerWidth < 900) {
      navbar.classList.add("hidden");
      hamburger.classList.add("visible");
    } else {
      navbar.classList.remove("hidden");
      hamburger.classList.remove("visible");
      navbar.classList.remove("active"); // ensure mobile menu closes on resize
    }
  }

  handleResize();
  window.addEventListener("resize", handleResize);

  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
});
