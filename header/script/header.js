document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".navbar");
  const search = document.querySelector(".search-container");
  const logo = document.querySelector(".logo");

  // Hamburger toggle
  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  // Search bar fly-in on load (with delay)
  setTimeout(() => search.classList.add("fly-in"), 700);

  // Search bar resize handler
  function handleSearchResize() {
    if (window.innerWidth < 1300) {
      search.classList.add("hidden");
    } else {
      search.classList.remove("hidden");
    }
  }
  handleSearchResize();
  window.addEventListener("resize", handleSearchResize);

  // --- Logo animation only once on initial load above 900px ---
  const initialWidth = window.innerWidth;
  if (initialWidth > 900 && !logo.dataset.hasAnimated) {
    logo.classList.add("fly-in-desktop");
    logo.dataset.hasAnimated = "true"; // mark as animated
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");
  const search = document.querySelector(".search-container");
  let logoAnimated = false;

  // Animate logo and search only on first load above 900px
  if (window.innerWidth > 900 && !logoAnimated) {
    logo.classList.add("fly-in-desktop");
    logoAnimated = true;
  }

  // Search bar fly-in
  setTimeout(() => search.classList.add("fly-in"), 700);
});
