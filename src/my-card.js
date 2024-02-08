import { LitElement, html, css } from "lit";

//lol what is not working
//the outline thats supposed to be there when it hovers over a card

//TODO:
//what is fancy pls tell me what
//Implement the javascript buttons

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
      "https://i.pinimg.com/originals/3d/8d/d8/3d8dd8fb5efdfd2ecedae9d47e1a1737.jpg";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        --card-background-color: #0f0f0f;
        --card-title-color: #f1f1f1;
        --card-text-color: #272727;
        flex-direction: row;
        transition: 0.5s all ease-in-out;
      }
      
      :host([fancy]) {
        display: inline-flex;
        --card-background-color: #f1f1f1;
        --card-title-color: #0f0f0f;
        --card-text-color: #0f0f0f;
        border: 5px solid fuchsia;
        border-radius: 12px;
        box-shadow: 10px 5px 5px #ff0000;
        transform: scale(0.95);
        }

      .card {
        width: 300px;
        max-height: 500px;
        padding: 24px;
        margin: 8px;
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
        height: 40px;
      
      }

      .text {
        font-family: "Roboto", sans-serif;
        font-size: 14px;
        color: var(--card-text-color);
        margin: 10px;
        overflow: hidden;
        height: 50px;
      }

      .pic {
        width: 300px;
        height: 200px;
        border-radius: 15px;
        object-fit: cover;
      }

      .img-container{
        text-align: center;
      }

      .btn:focus,
      .btn:hover {
        background-color: #ff0000;
        color: #f1f1f1;
      }

      .card:hover,
      .card:focus-within {
        outline: 10px red;
        outline-offset: 16px;
        opacity: 1;
      }


    `;
  }

  // put this anywhere on the MyCard class; just above render() is probably good
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
            class="pic"
            src="${this.image}"
            alt="CSS Meme relating to an airconditioner being too far into the wall"
          />
        </div>
        <h1 class="label">${this.label}</h1>
        <!-- put this in your render method where you had details -->
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
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
      label: { type: String, reflect: true},
      description: { type: String, reflect: true},
      link: { type: String },
      image: { type: String, reflect: true },
      fancy: {type: Boolean, reflect: true},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
