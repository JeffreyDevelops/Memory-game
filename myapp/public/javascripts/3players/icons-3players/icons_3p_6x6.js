const html_generieren_numbers_1p_4x4 = function () {

  const icons = [
    `<i class="fa-solid fa-coffee fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-hand-sparkles fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-coffee fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-hand-sparkles fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-socks fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-poo fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-socks fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-poo fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-motorcycle fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-brush fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-motorcycle fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-brush fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-code fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-ghost fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-code fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-ghost fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-ice-cream fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-broom-ball fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-ice-cream fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-broom-ball fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-skull-crossbones fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-user-astronaut fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-skull-crossbones fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-user-astronaut fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-user-secret fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-virus fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-user-secret fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-virus fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-guitar fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-poo-storm fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-guitar fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-poo-storm fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-bath fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-whiskey-glass"></i>`,
    `<i class="fa-solid fa-bath fa-fa-2xs"></i>`,
    `<i class="fa-solid fa-whiskey-glass"></i>`,
    ];

    icons.sort(() => Math.random() -0.5);

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
   <div class="game-flex">${icons[0]}</div>
   <div class="game-flex">${icons[1]}</div>
   <div class="game-flex">${icons[2]}</div>
   <div class="game-flex">${icons[3]}</div>
   <div class="game-flex">${icons[4]}</div>
   <div class="game-flex">${icons[5]}</div>
   <div class="game-flex">${icons[6]}</div>
   <div class="game-flex">${icons[7]}</div>
   <div class="game-flex">${icons[8]}</div>
   <div class="game-flex">${icons[9]}</div>
   <div class="game-flex">${icons[10]}</div>
   <div class="game-flex">${icons[11]}</div>
   <div class="game-flex">${icons[12]}</div>
   <div class="game-flex">${icons[13]}</div>
   <div class="game-flex">${icons[14]}</div>
   <div class="game-flex">${icons[15]}</div>
   <div class="game-flex">${icons[16]}</div>
   <div class="game-flex">${icons[17]}</div>
   <div class="game-flex">${icons[18]}</div>
   <div class="game-flex">${icons[19]}</div>
   <div class="game-flex">${icons[20]}</div>
   <div class="game-flex">${icons[21]}</div>
   <div class="game-flex">${icons[22]}</div>
   <div class="game-flex">${icons[23]}</div>
   <div class="game-flex">${icons[24]}</div>
   <div class="game-flex">${icons[25]}</div>
   <div class="game-flex">${icons[26]}</div>
   <div class="game-flex">${icons[27]}</div>
   <div class="game-flex">${icons[28]}</div>
   <div class="game-flex">${icons[29]}</div>
   <div class="game-flex">${icons[30]}</div>
   <div class="game-flex">${icons[31]}</div>
   <div class="game-flex">${icons[32]}</div>
   <div class="game-flex">${icons[33]}</div>
   <div class="game-flex">${icons[34]}</div>
   <div class="game-flex">${icons[35]}</div>
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
      <span class="moves-counter">0</span>
    </div>
    <div id="p4" class="moves">
      <span class="moves-header"><span class="p4-desktop">P4</span><span class="p4-mobile">Player 4</span></span>
      <span class="moves-counter">/</span>
    </div>
  </div>`

    target_body.insertAdjacentElement("afterbegin", numbers_1p_4x4);
  
  }

  const pair_stats_1 = function () {
    let target_order = document.querySelector("#finish-stats");
    let pair_1 = document.createElement("div");
    pair_1.setAttribute("id", "finish-moves");
    pair_1.setAttribute("class", "p1-moves");
    pair_1.innerHTML = `<span>Player 1</span>
    <span></span>`;
    target_order.insertAdjacentElement("afterbegin", pair_1);
  }

  const pair_stats_2 = function () {
    let target_order = document.querySelector("#finish-stats");
    let pair_2 = document.createElement("div");
    pair_2.setAttribute("id", "finish-moves");
    pair_2.setAttribute("class", "p2-moves");
    pair_2.innerHTML = `<span>Player 2</span>
    <span></span>`;
    target_order.insertAdjacentElement("afterbegin", pair_2);
  }

  const pair_stats_3 = function () {
    let target_order = document.querySelector("#finish-stats");
    let pair_3 = document.createElement("div");
    pair_3.setAttribute("id", "finish-moves");
    pair_3.setAttribute("class", "p3-moves");
    pair_3.innerHTML = `<span>Player 3</span>
    <span></span>`;
    target_order.insertAdjacentElement("afterbegin", pair_3);
  }


  // Check finish pairs for finish_menu / with tie
  const check_pair = function () {
        let winner_pair_bg_1 = document.querySelector(".p1-moves");
        let winner_pair_bg_2 = document.querySelector(".p2-moves");
        let winner_pair_bg_3 = document.querySelector(".p3-moves");
        let winner_target = document.querySelector("#finish-header");
        let p1_pair_header_1 = document.querySelector(".p1-moves span:nth-of-type(1)");
        let p2_pair_header_2 = document.querySelector(".p2-moves span:nth-of-type(1)");
        let p3_pair_header_3 = document.querySelector(".p3-moves span:nth-of-type(1)");
        let p1_pair = document.querySelector(".p1-moves span:nth-of-type(2)");
        let p2_pair = document.querySelector(".p2-moves span:nth-of-type(2)");
        let p3_pair = document.querySelector(".p3-moves span:nth-of-type(2)");
        let p1_pair_winner = document.querySelector(".p1-moves span:nth-of-type(1)");
        let p2_pair_winner = document.querySelector(".p2-moves span:nth-of-type(1)");
        let p3_pair_winner = document.querySelector(".p3-moves span:nth-of-type(1)");
        const get_pair_1 = document.querySelector("#p1 .moves-counter").innerHTML;
        const get_pair_2 = document.querySelector("#p2 .moves-counter").innerHTML;
        const get_pair_3 = document.querySelector("#p3 .moves-counter").innerHTML;
        

        p1_pair.innerText = `${get_pair_1} Pairs`;
        
        p2_pair.innerText = `${get_pair_2} Pairs`;

        p3_pair.innerText = `${get_pair_3} Pairs`;
        

        let pair_in_numb_1 = parseFloat(get_pair_1);
        let pair_in_numb_2 = parseFloat(get_pair_2);
        let pair_in_numb_3 = parseFloat(get_pair_3);

        let gethighest_numb = Math.max(pair_in_numb_1, pair_in_numb_2, pair_in_numb_3);

        if (pair_in_numb_1 > pair_in_numb_2 && pair_in_numb_1 > pair_in_numb_3) {
          let winner;
          winner = "1";
          p1_pair_winner.innerText = `Player 1 ` + "{Winner!}";
          winner_target.innerText = `Player ${winner} Wins!`;
          winner_pair_bg_1.style.backgroundColor = "#152938";
          p1_pair_header_1.style.setProperty("color", "#FFF", "important");
          p1_pair.style.setProperty("color", "#FFF", "important"); 
        } else if (pair_in_numb_2 > pair_in_numb_1 && pair_in_numb_2 > pair_in_numb_3) {
          let winner_2;
          winner_2 = "2";
          p2_pair_winner.innerText = `Player 2 ` + "{Winner!}";
          winner_target.innerText = `Player ${winner_2} Wins!`;
          winner_pair_bg_2.style.backgroundColor = "#152938";
          p2_pair.style.setProperty("color", "#FFF", "important");
          p2_pair_header_2.style.setProperty("color", "#FFF", "important");
        }
         if (pair_in_numb_3 > pair_in_numb_2 && pair_in_numb_3 > pair_in_numb_1) {
          let winner_3;
          winner_3 = "3";
          p3_pair_winner.innerText = `Player 3 ` + "{Winner!}";
          winner_target.innerText = `Player ${winner_3} Wins!`;
          winner_pair_bg_3.style.backgroundColor = "#152938";
          p3_pair.style.setProperty("color", "#FFF", "important");
          p3_pair_header_3.style.setProperty("color", "#FFF", "important");
         }
        if (gethighest_numb === pair_in_numb_1 && gethighest_numb === pair_in_numb_2 && gethighest_numb === pair_in_numb_3) {
          winner_target.innerText = `It's a tie!`
          p1_pair_winner.innerText = `Player 1 ` + "{Winner!}"
          winner_pair_bg_1.style.backgroundColor = "#152938";
          p1_pair_header_1.style.setProperty("color", "#FFF", "important");
          p1_pair.style.setProperty("color", "#FFF", "important");
          winner_target.innerText = `It's a tie!`
          p2_pair_winner.innerText = `Player 2 ` + "{Winner!}"
          winner_pair_bg_2.style.backgroundColor = "#152938";
          p2_pair.style.setProperty("color", "#FFF", "important");
          p2_pair_header_2.style.setProperty("color", "#FFF", "important");
          winner_target.innerText = `It's a tie!`
          p3_pair_winner.innerText = `Player 3 ` + "{Winner!}"
          winner_pair_bg_3.style.backgroundColor = "#152938";
          p3_pair.style.setProperty("color", "#FFF", "important");
          p3_pair_header_3.style.setProperty("color", "#FFF", "important");
        }  
        if (gethighest_numb === pair_in_numb_1 && gethighest_numb === pair_in_numb_2) {
          winner_target.innerText = `It's a tie!`
          p1_pair_winner.innerText = `Player 1 ` + "{Winner!}"
          winner_pair_bg_1.style.backgroundColor = "#152938";
          p1_pair_header_1.style.setProperty("color", "#FFF", "important");
          p1_pair.style.setProperty("color", "#FFF", "important");
          winner_target.innerText = `It's a tie!`
          p2_pair_winner.innerText = `Player 2 ` + "{Winner!}"
          winner_pair_bg_2.style.backgroundColor = "#152938";
          p2_pair.style.setProperty("color", "#FFF", "important");
          p2_pair_header_2.style.setProperty("color", "#FFF", "important");

        }
        if (gethighest_numb === pair_in_numb_1 && gethighest_numb === pair_in_numb_3) {
          winner_target.innerText = `It's a tie!`
          p1_pair_winner.innerText = `Player 1 ` + "{Winner!}"
          winner_pair_bg_1.style.backgroundColor = "#152938";
          p1_pair_header_1.style.setProperty("color", "#FFF", "important");
          p1_pair.style.setProperty("color", "#FFF", "important");
          p3_pair_winner.innerText = `Player 3 ` + "{Winner!}"
          winner_pair_bg_3.style.backgroundColor = "#152938";
          p3_pair.style.setProperty("color", "#FFF", "important");
          p3_pair_header_3.style.setProperty("color", "#FFF", "important");
            
          
          
        }
        if (gethighest_numb === pair_in_numb_2 && gethighest_numb === pair_in_numb_3) {
          winner_target.innerText = `It's a tie!`
          p2_pair_winner.innerText = `Player 2 ` + "{Winner!}"
          winner_pair_bg_2.style.backgroundColor = "#152938";
          p2_pair.style.setProperty("color", "#FFF", "important");
          p2_pair_header_2.style.setProperty("color", "#FFF", "important");
          p3_pair_winner.innerText = `Player 3 ` + "{Winner!}"
          winner_pair_bg_3.style.backgroundColor = "#152938";
          p3_pair.style.setProperty("color", "#FFF", "important");
          p3_pair_header_3.style.setProperty("color", "#FFF", "important");
          
        } 
  }

  // tie -- checks if pairs are the same amount
  const finish_game_mechanics = function () {
    const get_pair_1 = document.querySelector("#p1 .moves-counter").innerHTML;
    const get_pair_2 = document.querySelector("#p2 .moves-counter").innerHTML;
    const get_pair_3 = document.querySelector("#p3 .moves-counter").innerHTML;
    let pair_in_numb_1 = parseFloat(get_pair_1);
    let pair_in_numb_2 = parseFloat(get_pair_2);
    let pair_in_numb_3 = parseFloat(get_pair_3);
    let gethighest_numb = Math.max(pair_in_numb_1, pair_in_numb_2, pair_in_numb_3);

      finish_menu();
      if (gethighest_numb === pair_in_numb_1 && gethighest_numb === pair_in_numb_2 && gethighest_numb === pair_in_numb_3) {
        pair_stats_3();
        pair_stats_2();
        pair_stats_1();
        }
      if (gethighest_numb === pair_in_numb_1 && gethighest_numb === pair_in_numb_2 || 
        pair_in_numb_1 > pair_in_numb_2 && pair_in_numb_1 > pair_in_numb_3 || 
        pair_in_numb_2 > pair_in_numb_1 && pair_in_numb_2 > pair_in_numb_3 ||
        pair_in_numb_3 > pair_in_numb_2 && pair_in_numb_3 > pair_in_numb_1) {
      pair_stats_3();
      pair_stats_2();
      pair_stats_1();
      } else if (gethighest_numb === pair_in_numb_1 && gethighest_numb === pair_in_numb_3) {
      pair_stats_2();
      pair_stats_1();
      pair_stats_3();
      } else if(gethighest_numb === pair_in_numb_2 && gethighest_numb === pair_in_numb_3) {
        pair_stats_1();
        pair_stats_2();
        pair_stats_3();
        
      }

      
      
      
      setTimeout(function () {
        check_pair();
      }, 200);
      
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
    let pair_3 = 0;
    let color_call = document.querySelector("#p1");
    color_call.style.backgroundColor = "orange";
    let color_call_2 = document.querySelector("#p2");
    let color_call_3 = document.querySelector("#p3");
    let pair_header_p1 = document.querySelector("#p1 .moves-header");
    pair_header_p1.style.color = "#FFF";
    let pair_header_p2 = document.querySelector("#p2 .moves-header");
    let pair_header_p3 = document.querySelector("#p3 .moves-header");
    let pair_counter_color_p1 = document.querySelector("#p1 .moves-counter");
    let pair_counter_color_p2 = document.querySelector("#p2 .moves-counter");
    let pair_counter_color_p3 = document.querySelector("#p3 .moves-counter");
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
       let pair_target_3 = document.querySelector(".moves:nth-of-type(3) .moves-counter");

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
          if (flip_cards[0].innerHTML === flip_cards[1].innerHTML && color_call.style.backgroundColor === "orange") {
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
                
              
          } else if (flip_cards[0].innerHTML !== flip_cards[1].innerHTML && color_call.style.backgroundColor === "orange") {
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

          if (flip_cards[0].innerHTML === flip_cards[1].innerHTML && color_call_2.style.backgroundColor === "orange") {
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
              } else if (flip_cards[0].innerHTML !== flip_cards[1].innerHTML && color_call_2.style.backgroundColor === "orange") {
                color_call_2.style.backgroundColor = "";
                pair_counter_color_p2.style.color = "";
                pair_header_p2.style.color = "";
                
                  setTimeout(function () {
                    color_call_3.style.backgroundColor = "orange";
                    pair_counter_color_p3.style.color = "#FFF";
                    pair_header_p3.style.color = "#FFF";
                  }, 200);
                
                setTimeout(function() {
                  flip_cards.forEach(e => {
                   e.classList.remove("flipCard");
                   e.classList.remove("flip");
                   });
                }, 1000);       
              }


              if (flip_cards[0].innerHTML === flip_cards[1].innerHTML && color_call_3.style.backgroundColor === "orange") {
                pair_3 ++;
                pair_target_3.innerHTML = `${pair_3}`;
                  setTimeout(e => {
                    flip_cards.forEach(e => {
                      e.style.backgroundColor = "orange";
                      });
                  }, 200);
                  flip_cards.forEach(e => {
                    e.classList.remove("flip");
                    });
                  } else if (flip_cards[0].innerHTML !== flip_cards[1].innerHTML && color_call_3.style.backgroundColor === "orange") {
                    color_call_3.style.backgroundColor = "";
                    pair_counter_color_p3.style.color = "";
                    pair_header_p3.style.color = "";
                    
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