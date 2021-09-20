export default class Card {
  constructor(name) {
    this.color = name;
    this.Render()
  }
  Render() {
    let div = document.createElement("div");
    div.style.background = this.color;
    document.querySelector("[data-colors]").appendChild(div);
  }
}