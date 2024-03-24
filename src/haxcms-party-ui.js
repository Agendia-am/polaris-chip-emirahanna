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
    this.party = ["ezy5092", "","", "", "",  ];
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

        .party {
          width: 500px;
          height: 300px;
          align-content: center;
          color: black;
        }

        button {
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
            <button class="add-button" @click="${this.updateContainer}">
              Add
            </button>
            <button class="remove-button">Remove</button>
          </div>
          <div class="party">
          <rpg-character seed=${this.party[0]}></rpg-character>
          <rpg-character seed=${this.party[1]}></rpg-character>
          <rpg-character seed=${this.party[2]}></rpg-character>
          <rpg-character seed=${this.party[3]}></rpg-character>
          <rpg-character seed=${this.party[4]}></rpg-character>
        </div>
          <button class="save-button" @click="${this.makeItRain}">
            Save Party Members
          </button>
        </div>
      </confetti-container>
    `;
  }

  addItem() {
    input = document.querySelector(".search-input").value;
    this.party = { ...this.party, item };
  }

  displayItem(item){
    return html`<rpg-character seed="${item}"></rpg-character>`;  
  }

  updateContainer() {
    const container = this.shadowRoot.querySelector(".party");
    this.party.forEach((item) => {
      (this.displayItem(item));
    });
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
      item: { type: String, reflect: true },
    };
  }
}

globalThis.customElements.define(HaxcmsPartyUi.tag, HaxcmsPartyUi);
