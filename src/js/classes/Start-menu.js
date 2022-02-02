export default class Startmenu {

constructor () {
    this._html = this._html_generieren();
    this._theme = this._choose_theme();
}


_html_generieren() {
    let startMenu = document.createElement("section");
    startMenu.setAttribute("id", "game-start");
    startMenu.innerHTML = `<div class="flex-container">
    <span class="header_text">memory</span>
    <div class="menu-bg">
      <div id="select-theme">
        <!-- Select Theme -->
        <span>Select Theme</span>
        <div class="menu-buttons">
        <button id="theme-numbers" class="btn">Numbers</button>
        <button class="btn">Icons</button>
      </div>
      </div>
      <div id="numbers-of-players">
        <!-- Numbers of Players -->
        <span>Numbers of Players</span>
        <div class="menu-buttons">
        <button class="btn-2">1</button>
        <button class="btn-2">2</button>
        <button class="btn-2">3</button>
        <button class="btn-2">4</button>
      </div>
      </div>
      <div id="grid-system">
        <!-- Grid Size -->
        <span>Grid Size</span>
        <div class="menu-buttons">
        <button class="btn">4x4</button>
        <button class="btn">6x6</button>
      </div>
      </div>
      <div id="start">
        <!-- Start -->
        <div class="menu-buttons">
        <button class="start-btn">Start Game</button>
      </div>
      </div>
    </div>
  </div>`;

return startMenu;

}

_choose_theme() {
  let theme_numbers = this._html.querySelector("#theme-numbers");
  let theme_icons = this._html.querySelector("button:nth-of-type(2)");
  this._html.querySelector("#game-start");
  this._html.addEventListener("click", e =>{
    if (e.target.innerHTML === "Icons") {
      theme_numbers.removeAttribute("id");
      theme_icons.setAttribute("id", "theme-icons");
      
    } else {
      theme_numbers.setAttribute("id", "theme-numbers");
      theme_icons.removeAttribute("id", "theme-icons");
    }
    
  }); 
}


anzeigen() {
    this._choose_theme();
    let body = document.querySelector("body");
    if (body !== null) {
        body.insertAdjacentElement("afterbegin", this._html);
    }
    
}


}