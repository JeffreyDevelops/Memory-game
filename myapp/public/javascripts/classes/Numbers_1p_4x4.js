

export default class Numbers_1p_4x4 {

    constructor() {
        this.html_numbers_solo_4x4 = this.html_generieren_numbers_1p_4x4();
        this.click_memory = this._click_memory();
    }

    html_generieren_numbers_1p_4x4() {

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
          <span>Time</span>
      
        </div>
        <div class="moves">
          <span>Moves</span>
          
        </div>
      </div>`
      
      return numbers_1p_4x4;
      }

      

      _click_memory() {
        let card_target = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4");
        card_target.addEventListener("click", e =>{
          if (e.target.classList.contains("game-flex")) {
          const click_card = e.target;
          click_card.classList.add("flipCard");
          click_card.classList.add("flip");
        } 

           const flip_cards = this.html_numbers_solo_4x4.querySelectorAll(".flip");

            if (flip_cards.length === 2) {
              console.log(flip_cards);
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


      anzeigen_numbers_1p_4x4() {
        let body = document.querySelector("body");
          if (body !== null) {
              body.insertAdjacentElement("afterbegin", this.html_numbers_solo_4x4);
          }
          
      }  

}