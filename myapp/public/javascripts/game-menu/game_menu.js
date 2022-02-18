const html_generieren_menu = function() {
    let startMenu = document.createElement("section");
    let body_target = document.querySelector("body");
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
  body_target.insertAdjacentElement("afterbegin", startMenu);

}




const choose_theme = function () {
  let theme_numbers = document.querySelector("#theme-numbers");
  let theme_icons = document.querySelector("button:nth-of-type(2)");
  document.querySelector(".menu-buttons:nth-of-type(1)").addEventListener("click", theme => {

    if (theme.target.innerHTML === "Icons") {
      theme_numbers.removeAttribute("id");
      theme_icons.setAttribute("id", "theme-icons");
      
    } else if(theme.target.innerHTML === "Numbers") {
      theme_numbers.setAttribute("id", "theme-numbers");
      theme_icons.removeAttribute("id", "theme-icons");
    }
  }); 
}



 const choose_numbers_of_players = function (){
   let players_1 = document.querySelector("#players-1");
   let players_2 = document.querySelector("#menu-numbers-of-players button:nth-of-type(2)");
   let players_3 = document.querySelector("#menu-numbers-of-players button:nth-of-type(3)");
   let players_4 = document.querySelector("#menu-numbers-of-players button:nth-of-type(4)");
   document.querySelector("#menu-numbers-of-players").addEventListener("click", players => {
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

const choose_grid_size = function() {
  let fourxfour = document.querySelector("#menu-grid-size button:nth-of-type(1)");
  let sixxsix = document.querySelector("#menu-grid-size button:nth-of-type(2)");
  document.querySelector("#menu-grid-size").addEventListener("click", grid => {

    if (grid.target.innerHTML === "4x4") {
      fourxfour.setAttribute("id", "grid-size-4x4");
      sixxsix.removeAttribute("id", "grid-size-6x6");
      
    } else if(grid.target.innerHTML === "6x6") {
      fourxfour.removeAttribute("id");
      sixxsix.setAttribute("id", "grid-size-6x6");
    }
  }); 
}

const start_game = function () {
  // Player amount check 
  let p_1 = document.querySelector("#menu-numbers-of-players > button:nth-of-type(1)");
  let p_2 = document.querySelector("#menu-numbers-of-players > button:nth-of-type(2)");
  let p_3 = document.querySelector("#menu-numbers-of-players > button:nth-of-type(3)");
  let p_4 = document.querySelector("#menu-numbers-of-players > button:nth-of-type(4)");

  // Theme selection check
  let theme_numbers = document.querySelector("#menu-themes > button:nth-of-type(1)");
  let theme_icon = document.querySelector("#menu-themes > button:nth-of-type(2)");

  // Grid size check
  let fourxfour = document.querySelector("#menu-grid-size > button:nth-of-type(1)");
  let sixxsix = document.querySelector("#menu-grid-size > button:nth-of-type(2)");

  let start_button = document.querySelector(".start-btn");
  start_button.addEventListener("click", start => {
    if (theme_numbers.hasAttribute("id") && p_1.hasAttribute("id") && fourxfour.hasAttribute("id")) {
      setTimeout(function() {
        location.href = "/solo_1_4x4";
      }, 500);

    } else if (theme_numbers.hasAttribute("id") && p_1.hasAttribute("id") && sixxsix.hasAttribute("id")) {
      location.href = "/solo_1_4x4/6x6";
    } else {
      alert("you can only play numbers / solo / 4x4 and 6x6");
    }
  
  });
}

const run_menu = function () {
  html_generieren_menu();
  choose_theme();
  choose_numbers_of_players();
  choose_grid_size();
  start_game();
}
run_menu();



