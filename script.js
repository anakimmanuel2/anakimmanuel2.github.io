const nav = document.querySelector("nav");
const gallery = document.querySelector(".gallery");
const img = document.querySelectorAll(".img");

img.forEach(function (i) {
  i.addEventListener("click", function (e) {
    gallery.setAttribute("src", e.target.src);
    nav.classList.remove("nav-none");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
