const si = document.querySelector("#sign-in-btn");
const su = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

su.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

si.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
