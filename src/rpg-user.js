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
    this.saved = false;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: center;
        }

        :host:hover{
          transform: scale(1.1);
          transition: transform 0.5s;
          border: 5px solid var(--ddd-theme-default-nittanyNavy);
        }

        .username {
          font-family: "Press Start 2P", system-ui;
          color: var(--ddd-theme-default-beaverBlue);
          text-align: center;
        }
      `,
    ];
  }

  render() {
    return html`
      if(${this.saved}) {
        <rpg-character
        walking
        seed=${this.name}
      ></rpg-character
      >} else{<rpg-character seed=${this.name}></rpg-character>}
      <p class="username">${this.name}</p>
    `;
  }

  static get properties() {
    return {
      ...super.properties,
      saved: { type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(RpgUser.tag, RpgUser);
