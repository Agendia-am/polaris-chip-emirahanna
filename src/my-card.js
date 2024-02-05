import { LitElement, html, css } from "lit";

export class MyCard extends LitElement {
  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "This is a Brilliant Title";
    this.link = "https://hax.psu.edu";
    this.description =
      "The picture above is a CSS meme about an airconditioner that was installed half inside the wall. In other words, the airconditioner has negative margins.";
    this.image = "https://i.pinimg.com/originals/3d/8d/d8/3d8dd8fb5efdfd2ecedae9d47e1a1737.jpg";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      #cardlist {
        display: inline-flex;
        justify-content: stretch;
      }

      .card {
        max-width: 400px;
        height: auto;
        padding: 24px;
        margin: 8px;
        border: 8px solid #07BEB8;
        border-radius: 32px;
        background-color: #68D8D6;
        text-align: center;
        transition: transform 0.3s all ease-in-out;
      }

      .change-color {
        background-color: #add8e6;
      }

      #btn {
        background-color: #07BEB8;
        color: white;
        font-family: Noto Sans, sans-serif;
        font-size: 16px;
        padding: 16px 32px;
        border-radius: 15px;
        border-color: #07BEB8;
        display: none;
      }

      .link{
        text-decoration: none;
      }

      .title {
        font-weight: bold;
        font-family: 'Franklin Gothic Medium', sans-serif;
        font-size: 32px;
        color: #200116;
      }

      .text {
        font-family: Verdana, sans-serif;
        font-size: 16px;
        color: #200116;
        margin: 16px 64px;
        align-content: justify;
      }

      #btn:focus,
      #btn:hover {
        background-color: #87F5FB;
      }

      .pic {
        width: 90%;
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
        <div class='card'>
        <h1 class='title'>${this.title}</h1>
          <div>
              <img class='pic' src="${this.image}"
              alt="CSS Meme relating to an airconditioner being too far into the wall"></img>
              <p class='text'> ${this.description} </p>
              <a class='link' href=${this.link}>
                <button id='btn'>details</button>
              </a>
          </div>
        </div>
      </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      link: { type: String },
      image: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
