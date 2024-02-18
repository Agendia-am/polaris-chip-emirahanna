import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/meme-maker/meme-maker.js";

export class MyCard extends LitElement {
  static get tag() {
    return "my-card";
  }

  constructor() {
    super();
    this.label = "Title";
    this.link = "https://hax.psu.edu";
    this.description =
      "The picture above is a CSS meme about an airconditioner that was installed half inside the wall. In other words, the airconditioner has negative margins.";
    this.image =
      "https://64.media.tumblr.com/c28c7ef99543adf79dfa4ac5ad925c69/5306dfa7c930562e-81/s540x810/305545d0af2b73cc624f1d61556898a0908b38f7.gif";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        --card-background-color: #0f0f0f;
        --card-title-color: #f1f1f1;
        --card-text-color: #272727;
        transition: all 200ms 100ms;
        margin: 8px;
      }

      :host([fancy]) {
        display: inline-flex;
        --card-background-color: #f1f1f1;
        --card-title-color: #0f0f0f;
        --card-text-color: #0f0f0f;
        border: 6px solid #0f0f0f;
        border-radius: 12px;
        box-shadow: -10px -10px 5px 2px #1ff7ef, 10px 5px 5px #ff0000;
        animation: fadeIn 1s;
      }

      .card {
        width: 290px;
        max-height: 500px;
        padding: 24px;
        background-color: var(--card-background-color);
        opacity: 0.8;
        border-radius: 8px;
      }

      .card.change-color {
        background-color: red;
      }

      .btn {
        background-color: var(--card-background-color);
        color: var(--card-title-color);
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        margin-top: 24px;
        padding: 16px;
        border-radius: 32px;
        border-color: #272727;
      }

      .link {
        text-decoration: none;
      }

      .label {
        font-weight: bold;
        font-family: "Roboto", sans-serif;
        font-size: 18px;
        margin-left: 10px;
        color: var(--card-title-color);
        overflow: hidden;
        height: 45px;
      }

      .dropdown {
        color: var(--card-title-color);
      }

      .text {
        font-family: "Roboto", sans-serif;
        font-size: 14px;
        color: var(--card-text-color);
        margin: 10px;
        overflow: hidden;
        height: 50px;
      }

      .img{
        width: 300px;
        height: 200px;
        border-radius: 15px;
        object-fit: cover;
      }

      .btn:focus,
      .btn:hover {
        background-color: #ff0000;
        color: #f1f1f1;
      }

      .card:hover {
        opacity: 1;
        box-shadow: 0 0 0 2px #f1f1f1;
        transition: box-shadow 500ms;
      }

      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      @-webkit-keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    `;
  }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    } else {
      this.fancy = false;
    }
  }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
    <div class="card">
      <div>
        <div class="img-container"></h2>
          <img
            class="img"
            src=${this.image}
          ></img>
        </div>
        <h1 class="label">${this.label}</h1>
        <!-- put this in your render method where you had details -->
        <details class="dropdown" ?open="${this.fancy}" @toggle="${this.openChanged}">
          <summary>Read More</summary>
          <div class="text">
            <slot>${this.description}</slot>
          </div>
        </details>
        <a class="link" href=${this.link}>
          <button class="btn">▶</button>
        </a>
      </div>
    </div>`;
  }

  static get properties() {
    return {
      label: { type: String, reflect: true },
      description: { type: String, reflect: true },
      link: { type: String },
      image: { type: String, reflect: true },
      fancy: { type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
