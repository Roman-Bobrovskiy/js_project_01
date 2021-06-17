// import keyCodeList from "./keyCodeList";
let btnRef = document.querySelector("#header__menuBtn");
let menuRef = document.querySelector(".menu__content");
let spanRef = document.querySelector("#header__closeMenuBtn");

// btnRef.addEventListener("click", onOpenMenu);

// spanRef.addEventListener("click", () => {
//   menuRef.style.display = "none";
// });

// spanRef.addEventListener("mouseover", (event) => {
//   event.target.style.cursor = "pointer";
// });

btnRef.addEventListener("click", (event) => {
  menuRef.style.display = "block";
  btnRef.style.display = "none";
});

spanRef.addEventListener("click", (event) => {
  menuRef.style.display = "none";
  btnRef.style.display = "block";
});
