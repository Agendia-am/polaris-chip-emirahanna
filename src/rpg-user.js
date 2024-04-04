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
