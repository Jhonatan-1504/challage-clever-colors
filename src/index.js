import Card from "./components/Card.js";

const input = document.querySelector("[data-input]");
const label = document.querySelector("[data-label]");
const content = document.querySelector("[data-colors]");

let colors = [
  { color: "red" },
  { color: "green" },
  { color: "red" },
  { color: "blue" },
  { color: "purple" },
  { color: "yellow" },
  { color: "brown" },
  { color: "purple" },
  { color: "skyblue" },
];
let filterColors = colors;

const PrintColors = () => {
  content.innerHTML = "";
  filterColors.map(({color}) => new Card(color));
};

const HandleInput = ({target:{value}}) =>{
  label.textContent = value;
  if(value){
    filterColors = colors.filter(({color})=> color.toLowerCase().includes(value.toLowerCase()));
  } else {
    filterColors = colors;
  }
  PrintColors();
}

input.addEventListener("keyup", HandleInput);
window.addEventListener("DOMContentLoaded", PrintColors);