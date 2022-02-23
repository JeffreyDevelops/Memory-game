const html_generieren_numbers_1p_4x4 = function () {

  const numbers = [
    1,
    2,
    3,
    4,
    6,
    5,
    7,
    8,
    3,
    8,
    4,
    5,
    7,
    1,
    6,
    2,
    9,
    10,
    9,
    10,
    11,
    12,
    11,
    12,
    13,
    14,
    13,
    14,
    15,
    16,
    15,
    16,
    17,
    18,
    17,
    18
    ];

    numbers.sort(() => Math.random() -0.5);

    let numbers_1p_4x4 = document.createElement("section");
    let target_body = document.querySelector("body");
    numbers_1p_4x4.setAttribute("id", "game-numbers-solo-4x4");
    numbers_1p_4x4.innerHTML = `<nav id="game-nav">
    <div class="game-header-text">
      <span>memory</span>
    </div>
    <div class="game-menu-button">
      <button id="restart-button">Restart</button>
      <button id="menu">Menu</button>
      <button id="new-game">New Game</button>
    </div>
  </nav>
  
  <div class="game-flex">
  <div id="game-grid-number-solo-4x4">
   <div class="game-flex">${numbers[0]}</div>
   <div class="game-flex">${numbers[1]}</div>
   <div class="game-flex">${numbers[2]}</div>
   <div class="game-flex">${numbers[3]}</div>
   <div class="game-flex">${numbers[4]}</div>
   <div class="game-flex">${numbers[5]}</div>
   <div class="game-flex">${numbers[6]}</div>
   <div class="game-flex">${numbers[7]}</div>
   <div class="game-flex">${numbers[8]}</div>
   <div class="game-flex">${numbers[9]}</div>
   <div class="game-flex">${numbers[10]}</div>
   <div class="game-flex">${numbers[11]}</div>
   <div class="game-flex">${numbers[12]}</div>
   <div class="game-flex">${numbers[13]}</div>
   <div class="game-flex">${numbers[14]}</div>
   <div class="game-flex">${numbers[15]}</div>
   <div class="game-flex">${numbers[16]}</div>
   <div class="game-flex">${numbers[17]}</div>
   <div class="game-flex">${numbers[18]}</div>
   <div class="game-flex">${numbers[19]}</div>
   <div class="game-flex">${numbers[20]}</div>
   <div class="game-flex">${numbers[21]}</div>
   <div class="game-flex">${numbers[22]}</div>
   <div class="game-flex">${numbers[23]}</div>
   <div class="game-flex">${numbers[24]}</div>
   <div class="game-flex">${numbers[25]}</div>
   <div class="game-flex">${numbers[26]}</div>
   <div class="game-flex">${numbers[27]}</div>
   <div class="game-flex">${numbers[28]}</div>
   <div class="game-flex">${numbers[29]}</div>
   <div class="game-flex">${numbers[30]}</div>
   <div class="game-flex">${numbers[31]}</div>
   <div class="game-flex">${numbers[32]}</div>
   <div class="game-flex">${numbers[33]}</div>
   <div class="game-flex">${numbers[34]}</div>
   <div class="game-flex">${numbers[35]}</div>
  </div>
  </div>
  
  <div id="data">
<div id="p1" class="moves">
  <span class="moves-header"><span class="p1-desktop">P1</span><span class="p1-mobile">Player 1</span></span>
  <span class="moves-counter">0</span>
</div>
<div id="p2" class="moves">
  <span class="moves-header"><span class="p2-desktop">P2</span><span class="p2-mobile">Player 2</span></span>
  <span class="moves-counter">0</span>
</div>
<div id="p3" class="moves">
  <span class="moves-header"><span class="p3-desktop">P3</span><span class="p3-mobile">Player 3</span></span>
  <span class="moves-counter">/</span>
</div>
<div id="p4" class="moves">
  <span class="moves-header"><span class="p4-desktop">P4</span><span class="p4-mobile">Player 4</span></span>
  <span class="moves-counter">/</span>
</div>
</div>`

target_body.insertAdjacentElement("afterbegin", numbers_1p_4x4);

}

// Check finish pairs for finish_menu
const check_pair = function () {
    let winner_pair_bg_1 = document.querySelector("#finish-moves:nth-of-type(1)");
    let winner_pair_bg_2 = document.querySelector("#finish-moves:nth-of-type(2)");
    let winner_target = document.querySelector("#finish-header");
    let p1_pair_header_1 = document.querySelector("#finish-moves:nth-of-type(1) span:nth-of-type(1)");
    let p2_pair_header_2 = document.querySelector("#finish-moves:nth-of-type(2) span:nth-of-type(1)");
    let p1_pair = document.querySelector("#finish-moves:nth-of-type(1) span:nth-of-type(2)");
    let p2_pair = document.querySelector("#finish-moves:nth-of-type(2) span:nth-of-type(2)");
    const get_pair_1 = document.querySelector("#p1 .moves-counter").innerText;
    const get_pair_2 = document.querySelector("#p2 .moves-counter").innerText;
    
    p1_pair.innerText = `${get_pair_1} Pairs`;
    
    p2_pair.innerText = `${get_pair_2} Pairs`;

    let pair_in_numb_1 = parseFloat(get_pair_1);
    let pair_in_numb_2 = parseFloat(get_pair_2);

    if (pair_in_numb_1 > pair_in_numb_2) {
      console.log("this is not else");
      console.log(get_pair_1);
      console.log(get_pair_2);
      let winner;
      winner = "1";
      winner_target.innerText = `Player ${winner} Wins!`;
      winner_pair_bg_1.style.backgroundColor = "#152938";
      p1_pair_header_1.style.setProperty("color", "#FFF", "important");
      p1_pair.style.setProperty("color", "#FFF", "important");
      
      
    } else {
      console.log("this is else");
      console.log(get_pair_1);
      console.log(get_pair_2);
      let winner_2
      winner_2 = "2";
      winner_target.innerText = `Player ${winner_2} Wins!`;
      winner_pair_bg_2.style.backgroundColor = "#152938";
      p2_pair.style.setProperty("color", "#FFF", "important");
      p2_pair_header_2.style.setProperty("color", "#FFF", "important");
    }
 
}


// Check if players have the same amount of pairs
const tie_checker = function () {
let winner_pair_bg_1 = document.querySelector("#finish-moves:nth-of-type(1)");
let winner_pair_bg_2 = document.querySelector("#finish-moves:nth-of-type(2)");
let winner_target = document.querySelector("#finish-header");
let p1_pair_header_1 = document.querySelector("#finish-moves:nth-of-type(1) span:nth-of-type(1)");
let p2_pair_header_2 = document.querySelector("#finish-moves:nth-of-type(2) span:nth-of-type(1)");
let p1_pair = document.querySelector("#finish-moves:nth-of-type(1) span:nth-of-type(2)");
let p2_pair = document.querySelector("#finish-moves:nth-of-type(2) span:nth-of-type(2)");
const get_pair_1 = document.querySelector("#p1 .moves-counter").innerHTML;
const get_pair_2 = document.querySelector("#p2 .moves-counter").innerHTML;

p1_pair.innerText = `${get_pair_1} Pairs`;

p2_pair.innerText = `${get_pair_2} Pairs`;

if (get_pair_1 === get_pair_2) {
  winner_target.innerText = `It's a tie!`;
  winner_pair_bg_1.style.backgroundColor = "#152938";
  winner_pair_bg_2.style.backgroundColor = "#152938";
  p1_pair_header_1.style.setProperty("color", "#FFF", "important");
  p2_pair_header_2.style.setProperty("color", "#FFF", "important");
  p1_pair.style.setProperty("color", "#FFF", "important");
  p2_pair.style.setProperty("color", "#FFF", "important");
} 

}

// tie -- checks if pairs are the same amount
const finish_game_mechanics = function () {
const get_pair_1 = document.querySelector("#p1 .moves-counter").innerHTML;
const get_pair_2 = document.querySelector("#p2 .moves-counter").innerHTML;

if (get_pair_1 === get_pair_2) {
  tie_menu();
  tie_checker();
} else {
  finish_menu();
  setTimeout(function () {
  check_pair();
  }, 300);
}

}


// Finish-Menu
const finish_menu = function () {
  let get_doc = document.querySelector("#game-numbers-solo-4x4");
  
  let finish_menu = document.createElement("div");
  finish_menu.setAttribute("id", "finish-outside");
  finish_menu.innerHTML = `<div id="finish-screen">
  <div>
  <h1 id="finish-header"></h1>
  <p id="finish-text">Game over! Here are the results...<p>
  </div>

  <div id="finish-stats">
  <div id="finish-moves">
  <span>Player 1</span>
  <span></span>
  </div>

  <div id="finish-moves">
  <span>Player 2</span>
  <span></span>
  </div>

  <div id="finish-buttons">
  <button id="finish-restart-button">Restart</button>
  <button id="finish-new-game-button">Setup New Game</button>
  </div>`
  
    get_doc.insertAdjacentElement("afterbegin", finish_menu);
  
  
}

// Tie-Menu
const tie_menu = function () {
  let get_doc = document.querySelector("#game-numbers-solo-4x4");
  
  let finish_menu = document.createElement("div");
  finish_menu.setAttribute("id", "finish-outside");
  finish_menu.innerHTML = `<div id="finish-screen">
  <div>
  <h1 id="finish-header"></h1>
  <p id="finish-text">Game over! Here are the results...<p>
  </div>

  <div id="finish-stats">
  <div id="finish-moves">
  <span>Player 1</span>
  <span></span>
  </div>

  <div id="finish-moves">
  <span>Player 2</span>
  <span></span>
  </div>

  <div id="finish-buttons">
  <button id="finish-restart-button">Restart</button>
  <button id="finish-new-game-button">Setup New Game</button>
  </div>`
  
    get_doc.insertAdjacentElement("afterbegin", finish_menu);
  
  
}

// finish functions 

  //restart button 
  const finish_restart = function() {
  let finish_restart = document.querySelector("#finish-restart-button");
  finish_restart.addEventListener("click", e => {
  location.reload();
  }); 
  }

  
  //Setup new Game button 
  const finish_setup_new_game = function () {
    let finish_setup_new_game = document.querySelector("#finish-new-game-button");
    finish_setup_new_game.addEventListener("click" , e => {
      location.href = "/";
    });
  }


const click_memory = function () {
let pair = 0;
let pair_2 = 0;
let color_call = document.querySelector("#p1");
color_call.style.backgroundColor = "orange";
let color_call_2 = document.querySelector("#p2");
let pair_header_p1 = document.querySelector("#p1 .moves-header");
pair_header_p1.style.color = "#FFF";
let pair_header_p2 = document.querySelector("#p2 .moves-header");
let pair_counter_color_p1 = document.querySelector("#p1 .moves-counter");
let pair_counter_color_p2 = document.querySelector("#p2 .moves-counter");
pair_counter_color_p1.style.color = "#FFF";
let card_target = document.querySelector("#game-grid-number-solo-4x4");
card_target.addEventListener("click", e =>{
  if (e.target.classList.contains("game-flex")) {
  const click_card = e.target;
  click_card.classList.add("flipCard");
  click_card.classList.add("flip");
} 
   const orange_cards = document.querySelectorAll(".flipCard");
   const flip_cards = document.querySelectorAll(".flip");
   let pair_target = document.querySelector(".moves:nth-of-type(1) .moves-counter");
   let pair_target_2 = document.querySelector(".moves:nth-of-type(2) .moves-counter");

    if (flip_cards.length === 2) {
      if (orange_cards.length === 36) {
        setTimeout(function () {
          finish_game_mechanics();
        }, 500);

        setTimeout(function () {
          finish_restart();
          finish_setup_new_game();
        }, 600);
        
      }
      if (flip_cards[0].innerText === flip_cards[1].innerText && color_call.style.backgroundColor === "orange") {
        pair ++;
        pair_target.innerHTML = `${pair}`;
          setTimeout(e => {
            flip_cards.forEach(e => {
              e.style.backgroundColor = "orange";
              });
          }, 200);
          flip_cards.forEach(e => {
            e.classList.remove("flip");
            });
            
          
      } else if (flip_cards[0].innerText !== flip_cards[1].innerText && color_call.style.backgroundColor === "orange") {
        color_call.style.backgroundColor = "";
        pair_counter_color_p1.style.color = "";
        pair_header_p1.style.color = "";
        
          setTimeout(function () {
            color_call_2.style.backgroundColor = "orange";
            pair_counter_color_p2.style.color = "#FFF";
            pair_header_p2.style.color = "#FFF";
          }, 200);
        
        setTimeout(function() {
          flip_cards.forEach(e => {
           e.classList.remove("flipCard");
           e.classList.remove("flip");
           });
        }, 1000);       
      }

      if (flip_cards[0].innerText === flip_cards[1].innerText && color_call_2.style.backgroundColor === "orange") {
        pair_2 ++;
        pair_target_2.innerHTML = `${pair_2}`;
          setTimeout(e => {
            flip_cards.forEach(e => {
              e.style.backgroundColor = "orange";
              });
          }, 200);
          flip_cards.forEach(e => {
            e.classList.remove("flip");
            });
          } else if (flip_cards[0].innerText !== flip_cards[1].innerText && color_call_2.style.backgroundColor === "orange") {
            color_call_2.style.backgroundColor = "";
            pair_counter_color_p2.style.color = "";
            pair_header_p2.style.color = "";
            
              setTimeout(function () {
                color_call.style.backgroundColor = "orange";
                pair_counter_color_p1.style.color = "#FFF";
                pair_header_p1.style.color = "#FFF";
              }, 200);
            
            setTimeout(function() {
              flip_cards.forEach(e => {
               e.classList.remove("flipCard");
               e.classList.remove("flip");
               });
            }, 1000);       
          }
              

    } else if (flip_cards.length > 3) {
      
        flip_cards.forEach(e => {
         e.classList.remove("flipCard");
         e.classList.remove("flip");
         }); 
    } 
    

  
});


}

// memory logo click 
const logo_click = function () {
let logoClick = document.querySelector(".game-header-text");
logoClick.addEventListener("click", e => {
  location.href = "/";
});
}


// mobile / restart game after menu opens
const restart_game = function () {
let restart = document.querySelector("#menu-restart-button");
restart.addEventListener("click", e => {
  location.reload();
});
}

// mobile / go back to setup new game after menu opens
const new_game = function () {
let newGame = document.querySelector("#menu-new-game-button");
newGame.addEventListener("click", e => {
  location.href = "/";
});
}

// mobile / resume the game after menu opens

const resume_game = function () {
let resumeGame = document.querySelector("#menu-resume-game-button");
let deleteMenu = document.querySelector("#menu-outside");
resumeGame.addEventListener("click", e => {
deleteMenu.remove();
});
}

// desktop / restart game on clicking button
const restart_game_desktop = function () {
let restart_game = document.querySelector("#restart-button");
restart_game.addEventListener("click", e => {
  location.reload();
});
}

// desktop / new game on clicking button
const new_game_desktop = function () {
let new_game = document.querySelector("#new-game");
new_game.addEventListener("click", e => {
  location.href = "/";
});
}

// click [menu] button
const click_menu_button = function () {
let menu_button = document.querySelector("#menu");
let get_doc = document.querySelector("#game-numbers-solo-4x4");
let menu_outside = document.createElement("div");
menu_outside.setAttribute("id", "menu-outside");
menu_outside.innerHTML = `<div id="pause-bg">
<button id="menu-restart-button">Restart</button>
<button id="menu-new-game-button">New Game</button>
<button id="menu-resume-game-button">Resume Game</button>
</div>`


menu_button.addEventListener("click", e => {
  get_doc.insertAdjacentElement("afterbegin", menu_outside);
  restart_game();
  new_game();
  resume_game();
});
}






// starts all function
const start_numbers_1p_4x4 = function () {
html_generieren_numbers_1p_4x4();
click_memory();
click_menu_button();
logo_click();
restart_game_desktop();
new_game_desktop();
}

start_numbers_1p_4x4();