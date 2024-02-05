import { LitElement, html, css } from "lit";

export class MyCard extends LitElement {
  static get tag() {
    return "my-card";
  }

  constructor() {
    super();
    this.title = "This is a Brilliant Title";
    this.description =
      "The picture above is a CSS meme about an airconditioner that was installed half inside the wall. In other words, the airconditioner has negative margins.";
    //figure out how to make a button in the card
    //button
    //link
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      #cardlist {
        display: flex;
        justify-content: stretch;
      }

      .card {
        max-width: 400px;
        height: auto;
        padding: 24px;
        margin: 8px;
        border: 8px solid #ffe0da;
        border-radius: 8px;
        background-color: #fffeee;
        text-align: center;
        transition: transform 0.3s all ease-in-out;
      }

      .change-color {
        background-color: #add8e6;
      }

      #btn {
        background-color: #ffe0da;
        color: brown;
        font-family: Noto Sans, sans-serif;
        font-size: 16px;
        padding: 16px 32px;
        border-radius: 15px;
        display: none;
      }

      this.title {
        font-weight: bold;
        font-family: Noto Sans, sans-serif;
        font-size: 64px;
        color: #754040;
      }

      .text {
        font-family: Noto Sans, sans-serif;
        font-size: 16px;
        color: #754040;
        margin: 16px 64px;
      }

      #btn:focus,
      #btn:hover {
        background-color: #f3f2f2;
      }

      .pic {
        width: 70%;
      }

      @media (min-width: 501px) and (max-width: 800px) {
        #btn {
          display: inline;
        }
      }

      @media (max-width: 500px) {
        .card {
          transform: scale(0.8);
        }
      }
    `;
  }

  render() {
    return html`
      <div id = "cardlist">
        <div class="card">
        <h1>${this.title}</h1>
        <div>
            <img class="pic" src="https://i.pinimg.com/originals/3d/8d/d8/3d8dd8fb5efdfd2ecedae9d47e1a1737.jpg" alt="CSS Meme relating to an airconditioner being too far into the wall"></img>
            <p class="text" align="justify">
              The picture above is a CSS meme about an airconditioner that was installed half inside the wall. In other words, the airconditioner has negative margins. </p>
            <a href="https://hax.psu.edu" style="text-decoration:none">
              <button id="btn">details</button>
            </a>
          </div>
        </div>
      </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
