export default class Numbers_1p_4x4 {

    constructor() {
        this.html_numbers_solo_4x4 = this.html_generieren_numbers_1p_4x4();
    }

    html_generieren_numbers_1p_4x4() {
        let numbers_1p_4x4 = document.createElement("section");
        numbers_1p_4x4.setAttribute("id", "game-numbers-solo-4x4");
        numbers_1p_4x4.innerHTML = `<nav id="game-nav">
        <div class="game-header-text">
          <span>memory</span>
        </div>
        <div class="game-menu-button">
          <button>Menu</button>
        </div>
      </nav>
      
      <div class="game-flex">
      <div id="game-grid-number-solo-4x4">
       <div class="game-flex"><span></span></div>
       <div class="game-flex"><span></span></div>
       <div class="game-flex"><span></span></div>
       <div class="game-flex"><span></span></div>
       <div class="game-flex"><span></span></div>
       <div class="game-flex"><span></span></div>
       <div class="game-flex"><span></span></div>
       <div class="game-flex"><span></span></div>
       <div class="game-flex"><span></span></div>
       <div class="game-flex"><span></span></div>
       <div class="game-flex"><span></span></div>
       <div class="game-flex"><span></span></div>
       <div class="game-flex"><span></span></div>
       <div class="game-flex"><span></span></div>
       <div class="game-flex"><span></span></div>
       <div class="game-flex"><span></span></div>
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


      anzeigen_numbers_1p_4x4() {
        let body = document.querySelector("body");
          if (body !== null) {
              body.insertAdjacentElement("afterbegin", this.html_numbers_solo_4x4);
          }
          
      }  

}