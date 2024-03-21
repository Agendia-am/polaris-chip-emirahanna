import "@lrnwebcomponents/rpg-character/rpg-character.js";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import { html, css } from "lit";

export class HaxcmsPartyUi extends DDD {
  static get tag() {
    return "haxcms-party-ui";
  }

  constructor() {
    super();
    /* idk how to get the user's handle so it's my username as a default for now */
    /* TODO: can i make the array size change based on how many users i have? would need to create a new list every time we add it then right?*/
    this.party = [];
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          
          display: flex;
        }
        .container {
          background-color: #f2f2f2;
          padding: 20px;
        }
        .button-panel {
          display: flex;
        }

        button{
          font-family: "Press Start 2P", system-ui;
  font-weight: 400;
  font-style: normal;
        }
      `,
    ];
  }

  render() {
    return html`
      <confetti-container id="confetti">
        <div class="container">
          <div class="button-panel">
            <input
              type="text"
              class="search-input"
              placeholder="Search party member"
            />
            <button class="add-button">Add</button>
            <button class="remove-button">Remove</button>
          </div>

          <div>
            <rpg-character walking seed=${this.party[0]}></rpg-character>
            <rpg-character walking seed=${this.party[1]}></rpg-character>
            <rpg-character walking seed=${this.party[2]}></rpg-character>
            <rpg-character walking seed=${this.party[3]}></rpg-character>
            <rpg-character walking seed=${this.party[4]}></rpg-character>
          </div>
          <button class="save-button" @click="${this.makeItRain}">Save Party Members</button>
        </div>
      </confetti-container>
    `;
  }

  addItem() {
    input = document.querySelector(".search-input").value;
    this.item = { ...this.item, item };
  }

  displayParty() {
    $

}


  makeItRain() {
    import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
      (module) => {
        setTimeout(() => {
          this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
        }, 0);
      }
    );
  }

  static get properties() {
    return {
      party: { type: String, reflect: true },
    };
  }
}

globalThis.customElements.define(HaxcmsPartyUi.tag, HaxcmsPartyUi);
