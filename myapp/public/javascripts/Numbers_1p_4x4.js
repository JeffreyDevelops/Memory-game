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
        2
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
      </div>
      </div>
      
      <div id="data">
        <div class="time">
          <span class="time-header">Time</span>
          
          <div><label class="time-counter" id="minutes" style="font-weight: bold;">0</label><span class='bigger'>:</span><label class="time-counter" id="seconds" style="font-weight: bold;">00</label></div>
        </div>
        <div class="moves">
          <span class="moves-header">Moves</span>
          <span class="moves-counter">0</span>
        </div>
      </div>`

        target_body.insertAdjacentElement("afterbegin", numbers_1p_4x4);
      
      }

      function pad(val) {
        valString = val + "";
        if(valString.length < 2) {
           return "0" + valString;
           } else {
           return valString;
           }
      }

      function pad2(val) {
        valString = val + "";
           return valString;
      }
      
      totalSeconds = 0;
      function setTime(minutesLabel, secondsLabel) {
          totalSeconds++;
          secondsLabel.innerHTML = pad(totalSeconds%60);
          minutesLabel.innerHTML = pad2(parseInt(totalSeconds/60));
          }
      
      function set_timer() {
          minutesLabel = document.getElementById("minutes");
          secondsLabel = document.getElementById("seconds");
          my_int = setInterval(function() { setTime(minutesLabel, secondsLabel)}, 1000);
      }
      
        function stop_timer() {
          clearInterval(my_int);
        }
      
      
      const click_memory = function () {
        let moves = 0;
        let card_target = document.querySelector("#game-grid-number-solo-4x4");
        card_target.addEventListener("click", e =>{
          if (e.target.classList.contains("game-flex")) {
          const click_card = e.target;
          click_card.classList.add("flipCard");
          click_card.classList.add("flip");
        } 
           const orange_cards = document.querySelectorAll(".flipCard");
           const flip_cards = document.querySelectorAll(".flip");
           let move_target = document.querySelector(".moves span:nth-of-type(2)");

            if (flip_cards.length === 2) {
              moves ++;
              move_target.innerHTML = `${moves}`;
              if (orange_cards.length === 16) {
                stop_timer();
              }
              if (flip_cards[0].innerText === flip_cards[1].innerText) {
                  setTimeout(e => {
                    flip_cards.forEach(e => {
                      e.style.backgroundColor = "orange";
                      });
                  }, 200);
                  flip_cards.forEach(e => {
                    e.classList.remove("flip");
                    });
                  
              } else {
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

      const click_menu_button = function () {
        let menu_button = document.querySelector("#menu");
        let get_doc = document.querySelector("#game-numbers-solo-4x4");
        let menu_outside = document.createElement("div");
        menu_outside.setAttribute("id", "menu-outside");
        menu_outside.innerHTML = `<div id="pause-bg"></div>`
       

        menu_button.addEventListener("click", e => {
          stop_timer();
          get_doc.insertAdjacentElement("afterbegin", menu_outside);
        });
      }

      const start_numbers_1p_4x4 = function () {
        html_generieren_numbers_1p_4x4();
        click_memory();
        set_timer();
        click_menu_button();
      }
      start_numbers_1p_4x4();

 
 