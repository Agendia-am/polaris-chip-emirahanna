import { LitElement, html, css } from "lit";

//lol what is not working
//the outline thats supposed to be there when it hovers over a card

//TODO:
//Because i hate myself i want to make it look like spotify

export class MyCard extends LitElement {
  static get tag() {
    return "my-card";
  }

  constructor() {
    super();
    this.title = "Title";
    this.link = "https://hax.psu.edu";
    this.description =
      "The picture above is a CSS meme about an airconditioner that was installed half inside the wall. In other words, the airconditioner has negative margins.";
    this.image =
      "https://i.pinimg.com/originals/3d/8d/d8/3d8dd8fb5efdfd2ecedae9d47e1a1737.jpg";
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        --card-background-color: #0f0f0f;
        --card-default-text-color: #f1f1f1;
        flex-direction: row;
      }

      .card {
        width: 300px;
        height: auto;
        padding: 24px;
        margin: 8px;
        background-color: var(--card-background-color);
        opacity: 0.8;
        border-radius: 8px;
        transition: 0.6s all ease-in-out;
      }

      .change-color {
        background-color: #add8e6;
      }

      .btn {
        background-color: #272727;
        color: var(--card-default-text-color);
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        padding: 16px;
        border-radius: 32px;
        border-color: #272727;
      }

      .link {
        text-decoration: none;
      }

      .title {
        font-weight: bold;
        font-family: "Roboto", sans-serif;
        font-size: 18px;
        margin-left: 10px;
        color: var(--card-default-text-color);
        overflow: hidden;
      
      }

      .text {
        font-family: "Roboto", sans-serif;
        font-size: 14px;
        overflow: hidden;
        color: #aaaaaa;
        margin-left: 10px;
        overflow: hidden;
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
      }

      .card:hover,
      .card:focus-within {
        outline: 2px var(--card-background-color);
        outline-offset: 16px;
        opacity: 1;
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
    <div class="card">
      <div>
        <div class="img-container"></h2>
          <img
            class="pic"
            src="${this.image}"
            alt="CSS Meme relating to an airconditioner being too far into the wall"
          />
        </div>
        <h2 class="title">${this.title}</h2>
        <p class="text">${this.description}</p>
        <a class="link" href=${this.link}>
          <button class="btn">👍 | details</button>
        </a>
      </div>
    </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      link: { type: String },
      image: { type: String, reflect: true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
