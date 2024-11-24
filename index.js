const nav = document.querySelector("#primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const body = document.querySelector("body");

navToggle.addEventListener("click", () => {
   const visibility = nav.getAttribute("data-visible")
   if (visibility === "false") {
   nav.setAttribute("data-visible", true)
   navToggle.setAttribute("aria-expanded", true)
   body.classList.toggle("no-touch")

 } else {
   nav.setAttribute("data-visible", false)
   navToggle.setAttribute("aria-expanded", false)
   body.classList.toggle("no-touch")
 }
})