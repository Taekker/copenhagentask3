import "./style.css";

//   document.documentElement.classList.add("dark");

//   document.documentElement.classList.remove("dark");

const btn = document.querySelector("#darkmode");

btn.addEventListener("click", darkfunction);

function darkfunction() {
  document.documentElement.classList.toggle("dark");
}
