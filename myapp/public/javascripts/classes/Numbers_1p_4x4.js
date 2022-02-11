

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
       <div class="game-flex"><span>2</span></div>
       <div class="game-flex"><span>3</span></div>
       <div class="game-flex"><span>5</span></div>
       <div class="game-flex"><span>4</span></div>
       <div class="game-flex"><span>9</span></div>
       <div class="game-flex"><span>5</span></div>
       <div class="game-flex"><span>8</span></div>
       <div class="game-flex"><span>7</span></div>
       <div class="game-flex"><span>4</span></div>
       <div class="game-flex"><span>8</span></div>
       <div class="game-flex"><span>3</span></div>
       <div class="game-flex"><span>6</span></div>
       <div class="game-flex"><span>9</span></div>
       <div class="game-flex"><span>2</span></div>
       <div class="game-flex"><span>7</span></div>
       <div class="game-flex"><span>6</span></div>
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
        test.forEach(e => {
          e.style.display = "none";
      });
        let one = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(1)");
        let two = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(2)");
        let three = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(3)");
        let four = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(4)");
        let five = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(5)");
        let six = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(6)");
        let seven = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(7)");
        let eight = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(8)");
        let nine = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(9)");
        let ten = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(10)");
        let eleven = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(11)");
        let twelve = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(12)");
        let thirteen = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(13)");
        let fourteen = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(14)");
        let fifteen = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(15)");
        let sixteen = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(16)");

        
        let one_display = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(1) > span");
        let two_display = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(2) > span");
        let three_display = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(3) > span");
        let four_display = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(4) > span");
        let five_display = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(5) > span");
        let six_display = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(6) > span");
        let seven_display = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(7) > span");
        let eight_display = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(8) > span");
        let nine_display = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(9) > span");
        let ten_display = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(10) > span");
        let eleven_display = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(11) > span");
        let twelve_display = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(12) > span");
        let thirteen_display = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(13) > span");
        let fourteen_display = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(14) > span");
        let fifteen_display = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(15) > span");
        let sixteen_display = this.html_numbers_solo_4x4.querySelector("#game-grid-number-solo-4x4 .game-flex:nth-of-type(16) > span");
        

        one.addEventListener("click", e => {
        
          one_display.style.display = "block";

          console.log(e);
        
        });

        two.addEventListener("click", e => {
        
          two_display.style.display = "block";

          console.log(e);
        
        });

        three.addEventListener("click", e => {
        
          three_display.style.display = "block";

          console.log(e);
        
        });

        four.addEventListener("click", e => {
        
          four_display.style.display = "block";

          console.log(e);
        
        });

        five.addEventListener("click", e => {
        
          five_display.style.display = "block";

          console.log(e);
        
        });

        six.addEventListener("click", e => {
        
          six_display.style.display = "block";

          console.log(e);
        
        });

        seven.addEventListener("click", e => {
        
          seven_display.style.display = "block";

          console.log(e);
        
        });


        eight.addEventListener("click", e => {
        
          eight_display.style.display = "block";

          console.log(e);
        
        });


        nine.addEventListener("click", e => {
        
          nine_display.style.display = "block";

          console.log(e);
        
        });


        ten.addEventListener("click", e => {
        
          ten_display.style.display = "block";

          console.log(e);
        
        });


        eleven.addEventListener("click", e => {
        
          eleven_display.style.display = "block";

          console.log(e);
        
        });


        twelve.addEventListener("click", e => {
        
          twelve_display.style.display = "block";

          console.log(e);
        
        });


        thirteen.addEventListener("click", e => {
        
          thirteen_display.style.display = "block";

          console.log(e);
        
        });


        fourteen.addEventListener("click", e => {
        
          fourteen_display.style.display = "block";

          console.log(e);
        
        });


        fifteen.addEventListener("click", e => {
        
          fifteen_display.style.display = "block";

          console.log(e);
        
        });


        sixteen.addEventListener("click", e => {
        
          sixteen_display.style.display = "block";

          console.log(e);
        
        });


      }


      anzeigen_numbers_1p_4x4() {
        let body = document.querySelector("body");
          if (body !== null) {
              body.insertAdjacentElement("afterbegin", this.html_numbers_solo_4x4);
          }
          
      }  

}