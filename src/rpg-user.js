import "@lrnwebcomponents/rpg-character/rpg-character.js";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import { html, css } from "lit";

export class RpgUser extends DDD {
  static get tag() {
    return "rpg-user";
  }

  constructor() {
    super();
    this.name = "";
    this.selected = false;
  }


  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline-block;
          text-align: center;
          min-width: 17vw;
          max-width: 17vw;
          margin: var(--ddd-spacing-4, 20px);
        }

        :host([selected]) {
          display: inline-block;
          text-align: center;
          min-width: 17vw;
          max-width: 17vw;
          margin: var(--ddd-spacing-4, 20px);
          transform: scale(1.1);
          border: 2px solid var(--ddd-theme-default-slateMaxLight);
          box-shadow: 10px var(--ddd-theme-default-slateMaxLight);
        }

        .character:hover{
          transform: scale(1.1);
          transition: transform 300ms all ease-in-out;
        }

        .username {
          font-family: "Press Start 2P", system-ui;
          color: var(--ddd-theme-default-slateMaxLight);
          text-align: center;
          overflow-x: hidden;
        }
      `,
    ];
  }

  render() {
      return html` <div class="character" @click=${this.toggleSelected}  >
          <rpg-character walking seed=${this.name}></rpg-character>
          <p class="username">${this.name}</p>
        </div>`;
  }

  toggleSelected() {
    this.selected = !this.selected;
  }
  


  static get properties() {
    return {
      ...super.properties,
      selected: { type: Boolean, reflect: true },
      name: { type: String },
    };
  }
}

globalThis.customElements.define(RpgUser.tag, RpgUser);
