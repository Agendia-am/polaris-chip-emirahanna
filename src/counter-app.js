import { LitElement, html, css } from "lit";

export class CounterApp extends LitElement {
  static get tag() {
    return "counter-app";
  }

  constructor() {
    super();
    this.counter = 0;
    this.max = 30;
    this.min = -30;
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        transition: all 200ms 100ms;
        margin: 8px;
        text-align: center;
        font-family: "Roboto", sans-serif;
        color: black;
      }

      .card {
        width: 200px;
        padding: 24px;
        background-color: #ffff;
        border-radius: 8px;
      }

      .counter {
        color: #272727;
        font-family: "Old Standard TT", sans-serif;
        font-size: 64px;
      }

      .plus,
      .minus {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 18px;
        background-color: #ff0000;
      }

      button:hover {
        background-color: #4ae320;
      }
    `;
  }

  render() {
    return html` <div class="card">
      <div class="counter-container">
        <h1 class="counter">${this.counter}</h1>
      </div>
      <div>
        <button class="plus">+</button>
        <button class="minus">-</button>
      </div>
      <div class="minmaxval">
        <p>Min: ${this.min}</p>
        <p>Max: ${this.max}</p>
      </div>
    </div>`;
  }

  /*
  plus() {
    //increments the counter value if the .plus button is clicked
    this.counter++;
  }

  minus() {
    //increments the counter value if the .plus button is clicked
    this.counter--;
  }

  */


  static get properties() {
    return {
      counter: { type: Number, reflect: true },
      max: { type: Number, reflect: true },
      min: { type: Number, reflect: true },
    };
  }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);
