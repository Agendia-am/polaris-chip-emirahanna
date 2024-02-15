import { LitElement, html, css } from "lit";

export class CounterApp extends LitElement {
  static get tag() {
    return "counter-app";
  }

  constructor() {
    super();
    this.counter = 0;
    this.max = 5;
    this.min = -5;
  }

  static get styles() {
    return css`
      :host {
        --text-color: #feffff;
        color: var(--text-color);
        background: linear-gradient(#000551, #0172fc);
        margin: 8px;
        font-family: "Roboto", sans-serif;
        text-align: center;
        border-radius: 16px;
        display: inline-flex;
        transition: all 250ms 50ms ease-in-out;
      }

      :host([counter="18"]) {
        color: #ffe301;
        background: linear-gradient(#670097, #ffe301);
      }
      :host([counter="21"]) {
        color: #f4ac3b;
        background: linear-gradient(#000000, #0172fc);
      }

      .card {
        width: 200px;
        padding: 24px;
      }

      .counter {
        font-family: "Urbanist", sans-serif;
        font-size: 84px;
        padding-top: 16px;
      }

      button {
        background-color: rgba(0, 0, 0, 0.01);
        color: var(--text-color);
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border-color: #5f86ca;
        font-size: 18px;
      }

      .minmaxval{
        color: var(--text-color);
      }

      button:hover,
      button:focus-within {
        outline: 10px white;
      }
    `;
  }

  render() {

    var textColor;
    if(this.counter === this.min || this.counter === this.max){
      textColor="#f4ac3b";
    };
    return html` <confetti-container id="confetti">
      <div class="card">
        <div class="counter-container">
          <h1 class="counter" style="color:${textColor};">${this.counter}</h1>
        </div>
        <div>
          <button
            class="minus-button"
            @click="${this.minus}"
            ?disabled="${this.min === this.counter}"
          >
            -
          </button>
          <button
            class="plus-button"
            @click="${this.plus}"
            ?disabled="${this.max === this.counter}"
          >
            +
          </button>
        </div>
        <div class="minmaxval">
          <p>Min: ${this.min}</p>
          <p>Max: ${this.max}</p>
        </div>
      </div>
    </confetti-container>`;
  }

  plus() {
    //increments the counter value if the .plus button is clicked
    if (this.counter < this.max && this.counter >= this.min) {
      this.counter++;
    }
  }

  minus() {
    //increments the counter value if the .plus button is clicked
    if (this.counter <= this.max && this.counter > this.min) {
      this.counter--;
    }
  }

  updated(changedProperties) {
    if (changedProperties.has("counter")) {
      // do your testing of the value and make it rain by calling makeItRain
      if (this.counter == 21) {
        this.makeItRain();
      }
    }
  }

  makeItRain() {
    // this is called a dynamic import. It means it won't import the code for confetti until this method is called
    // the .then() syntax after is because dynamic imports return a Promise object. Meaning the then() code
    // will only run AFTER the code is imported and available to us
    import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
      (module) => {
        // This is a minor timing 'hack'. We know the code library above will import prior to this running
        // The "set timeout 0" means "wait 1 microtask and run it on the next cycle.
        // this "hack" ensures the element has had time to process in the DOM so that when we set popped
        // it's listening for changes so it can react
        setTimeout(() => {
          // forcibly set the poppped attribute on something with id confetti
          // while I've said in general NOT to do this, the confetti container element will reset this
          // after the animation runs so it's a simple way to generate the effect over and over again
          this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
        }, 0);
      }
    );
  }

  static get properties() {
    return {
      counter: { type: Number, reflect: true },
      max: { type: Number, reflect: true },
      min: { type: Number, reflect: true },
      //textColor: {type: String, reflect: true},
    };
  }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);
