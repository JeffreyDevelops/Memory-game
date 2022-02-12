

export default class Numbers_1p_4x4 {

    constructor() {
        this.html_numbers_solo_4x4 = this.html_generieren_numbers_1p_4x4();
        this.click_memory = this._click_memory();
    }

    html_generieren_numbers_1p_4x4() {
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
       <div class="game-flex">2</div>
       <div class="game-flex">3</div>
       <div class="game-flex">4</div>
       <div class="game-flex">5</div>
       <div class="game-flex">6</div>
       <div class="game-flex">7</div>
       <div class="game-flex">8</div>
       <div class="game-flex">9</div>
       <div class="game-flex">11</div>
       <div class="game-flex">22</div>
       <div class="game-flex">22</div>
       <div class="game-flex">33</div>
       <div class="game-flex">43</div>
       <div class="game-flex">32</div>
       <div class="game-flex">1</div>
       <div class="game-flex">2</div>
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
        let test = this.html_numbers_solo_4x4.querySelectorAll("#game-grid-number-solo-4x4 span");
        let test1 = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4");
        let test2 = this.html_numbers_solo_4x4.querySelectorAll("#game-grid-number-solo-4x4 .game-flex > span");

        test1.addEventListener("click", e =>{

          if (e.target.classList.contains("game-flex")) {
             e.target.classList.toggle("flip");
            
          } else {
            console.log("It doesn't work G");
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