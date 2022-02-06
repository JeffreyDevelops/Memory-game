export default class Startmenu {

constructor () {
    this._html = this._html_generieren_menu();
    this._theme = this._choose_theme();
    this._numbers_players = this._choose_numbers_of_players();
    this._grid_size = this._choose_grid_size();
    this._start_game = this._start_game();
}


_html_generieren_menu() {
    let startMenu = document.createElement("section");
    startMenu.setAttribute("id", "game-start");
    startMenu.innerHTML = `<div class="flex-container">
    <span class="header_text">memory</span>
    <div class="menu-bg">
      <div id="select-theme">
        <!-- Select Theme -->
        <span>Select Theme</span>
        <div id="menu-themes" class="menu-buttons">
        <button id="theme-numbers" class="btn">Numbers</button>
        <button class="btn">Icons</button>
      </div>
      </div>
      <div id="numbers-of-players">
        <!-- Numbers of Players -->
        <span>Numbers of Players</span>
        <div id="menu-numbers-of-players" class="menu-buttons">
        <button id="players-1" class="btn-2">1</button>
        <button class="btn-2">2</button>
        <button class="btn-2">3</button>
        <button class="btn-2">4</button>
      </div>
      </div>
      <div id="grid-system">
        <!-- Grid Size -->
        <span>Grid Size</span>
        <div id="menu-grid-size" class="menu-buttons">
        <button id="grid-size-4x4" class="btn">4x4</button>
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
  this._html.querySelector(".menu-buttons:nth-of-type(1)").addEventListener("click", theme => {

    if (theme.target.innerHTML === "Icons") {
      theme_numbers.removeAttribute("id");
      theme_icons.setAttribute("id", "theme-icons");
      
    } else if(theme.target.innerHTML === "Numbers") {
      theme_numbers.setAttribute("id", "theme-numbers");
      theme_icons.removeAttribute("id", "theme-icons");
    }
  }); 
}

 _choose_numbers_of_players () {
   let players_1 = this._html.querySelector("#players-1");
   let players_2 = this._html.querySelector("#menu-numbers-of-players button:nth-of-type(2)");
   let players_3 = this._html.querySelector("#menu-numbers-of-players button:nth-of-type(3)");
   let players_4 = this._html.querySelector("#menu-numbers-of-players button:nth-of-type(4)");
   this._html.querySelector("#menu-numbers-of-players").addEventListener("click", players => {
    if (players.target.innerHTML === "1") {
      players_1.setAttribute("id", "players-1");
    } else {
      players_1.removeAttribute("id");
    }
    if (players.target.innerHTML === "2") {
      players_2.setAttribute("id", "players-2");
    } else {
      players_2.removeAttribute("id");
    }

    if (players.target.innerHTML === "3") {
      players_3.setAttribute("id", "players-3");
    } else {
      players_3.removeAttribute("id");
    }

    if (players.target.innerHTML === "4") {
      players_4.setAttribute("id", "players-4");
    } else {
      players_4.removeAttribute("id");
    }
  
  });
}

_choose_grid_size() {
  let fourxfour = this._html.querySelector("#menu-grid-size button:nth-of-type(1)");
  let sixxsix = this._html.querySelector("#menu-grid-size button:nth-of-type(2)");
  this._html.querySelector("#menu-grid-size").addEventListener("click", grid => {

    if (grid.target.innerHTML === "4x4") {
      fourxfour.setAttribute("id", "grid-size-4x4");
      sixxsix.removeAttribute("id", "grid-size-6x6");
      
    } else if(grid.target.innerHTML === "6x6") {
      fourxfour.removeAttribute("id");
      sixxsix.setAttribute("id", "grid-size-6x6");
    }
  }); 
}

_start_game() {
  let attack_body = document.querySelector("body");
  let start_button = this._html.querySelector(".start-btn");
  start_button.addEventListener("click", start => {
  this._html.remove();
  attack_body.style.backgroundColor = "#FFF";
  // let numbers_onep_4x4 = new Numbers_1p_4x4();
  // numbers_onep_4x4.anzeigen_numbers_1p_4x4();
  });
}


_anzeigen_menu() {
    let body = document.querySelector("body");
    if (body !== null) {
        body.insertAdjacentElement("afterbegin", this._html);
    }
    
}



}