import "@lrnwebcomponents/rpg-character/rpg-character.js";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import { html, css } from "lit";

export class HaxcmsPartyUi extends DDD {
  static get tag() {
    return "haxcms-party-ui";
  }

  constructor() {
    super();
    /* keydown event for the search bar, using logkey?*/
    /* make the writing in the sarch bar destaurated */
    /* make it have sounds when we write */
    /* make the button have a sound when we click it */
    /* use in put event */
    /** tags on th chracters */
    /* make the characters walk when save party is pressed */
    /* make the characters walk when add is pressed */
    this.minPartySize = 5;
    this.changed = false;
    this.saved = false;
    this.party =
      localStorage.getItem("party") != null
        ? localStorage.getItem("party").split(",")
        : [];
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: center;

        }
        .block {
          width: var(--haxcms-party-ui-container, 95vw);
          padding: var(--ddd-spacing-6);
          background-color: var(--ddd-theme-default-roarMaxlight);
        }

        .container {
          margin: var(--ddd-spacing-4);
          padding: var(--ddd-spacing-6);
          border: 10px solid var(--ddd-theme-default-nittanyNavy);
          box-shadow: -5px 0 0 0 black, 5px 0 0 0 black, 0 -5px 0 0 black,
            0 5px 0 0 black;
        }

        .title {
          font-family: "Press Start 2P", system-ui;
          background-color: (var(--ddd-theme-default-roarMaxlight), white);
          color: var(--ddd-theme-default-beaverBlue);
          margin: 0px 0px 50px 30px;
          text-align: center;
          animation: blinker 1.5s linear infinite;
          text-shadow: 2px 4px 4px rgba(46,91,173,0.6);
        }

        .button-panel {
          display: flexbox;
          margin-left: var(--ddd-spacing-4);
        }
        .party {
          display: inline-flexbox;
          max-width: var(--haxcms-party-ui-party-width, 90vw);
          height: var(--haxcms-party-ui-party-height, 300px);
          margin: var(--ddd-spacing-5);
          color: var(--ddd-theme-default-roarMaxlight);
          text-align: center;
      
        }

        #search-input {
          font-family: "Press Start 2P", system-ui;
          font-size: var(--ddd-font-size-3xs);
          min-width: 200px;
          margin: var(--ddd-spacing-3);
          padding: var(--ddd-spacing-5);
          background-color: var(--ddd-theme-default-slateMaxLight);
          color: var(--ddd-theme-default-wonderPurple);
          box-shadow: -5px 0 0 0 black, 5px 0 0 0 black, 0 -5px 0 0 black,
            0 5px 0 0 black;
        }

        .add-button {
          font-family: "Press Start 2P", system-ui;
          font-size: var(--ddd-font-size-3xs);
          min-width: 150px;
          margin: var(--ddd-spacing-3);
          padding: var(--ddd-spacing-5);
          background-color: var(--ddd-theme-default-futureLime);
          color: var(--ddd-theme-default-wonderPurple);
          box-shadow: -5px 0 0 0 black, 5px 0 0 0 black, 0 -5px 0 0 black,
            0 5px 0 0 black;
        }

        .remove-button {
          font-family: "Press Start 2P", system-ui;
          font-size: var(--ddd-font-size-3xs);
          min-width: 150px;
          margin: var(--ddd-spacing-3);
          padding: var(--ddd-spacing-5);
          background-color: var(--ddd-theme-default-original87Pink);
          color: var(--ddd-theme-default-slateMaxLight);
          box-shadow: -5px 0 0 0 black, 5px 0 0 0 black, 0 -5px 0 0 black,
            0 5px 0 0 black;
        }
        .save-button {
          font-family: "Press Start 2P", system-ui;
          font-size: var(--ddd-font-size-3xs);
          min-width: 150px;
          margin: var(--ddd-spacing-3);
          padding: var(--ddd-spacing-5);
          background-color: var(--ddd-theme-default-link);
          color: var(--ddd-theme-default-slateMaxLight);
          box-shadow: -5px 0 0 0 black, 5px 0 0 0 black, 0 -5px 0 0 black,
            0 5px 0 0 black;
        }

        button:hover {
          background-color: var(--ddd-theme-default-keystoneYellow);
          color: var(--ddd-theme-default-potentialMidnight);
        }

        @keyframes blinker {
          50% {
            opacity: 0;
          }
        }
      `,
    ];
  }

  render() {
    return html`
    <audio id="coin-sound" src="media/coin sound.wav" ></audio>
    <audio id="remove-sound" src="media/remove sound.mp3" ></audio>
      <confetti-container id="confetti">
        <div class="block">
          <h1 class="title">CHOOSE YOUR PARTY</h1>
          <div class="container">
            <div class="button-panel">
              <input
                type="search"
                id="search-input"
                placeholder="Search party member..."
              />
              <button class="add-button" @click="${this.addUser}">Add</button>
              <button class="remove-button" @click="${this.deleteData}" >
                Remove
              </button>
            </div>
            <div class="party">
              ${this.party.map((item) => this.displayItem(item))}
              <!-- this is property drilling. not the best idea-->
            </div>
            <button class="save-button" @click="${this.saveData}">
              Save Party Members
            </button>
          </div>
        </div>
      </confetti-container>
    `;
  }

  addUser() {
    const input = this.shadowRoot.getElementById("search-input");
    const username = input.value.trim();

    /* if the party is less than 5, add the user */
    if (username !== "") {
      if (/^[a-z0-9]{1,10}$/.test(username)) {
        if (!this.party.includes(username)) {
          this.party = [...this.party, username];
          this.toggleChanged();
          this.shadowRoot.getElementById("coin-sound").play();
        } else {
          window.alert("Username is already in the party.");
        }
      } else {
        window.alert("Username must be lowercase and numbers only.");
      }
      this.shadowRoot.getElementById("search-input").value="";
      this.shadowRoot.getElementById("search-input").focus();
    }

  }

  toggleChanged() {
    this.changed = !this.changed;
  }

  deleteData() {
    localStorage.removeItem("party");
  }

  saveData() {
    if (this.changed) {
      const myArray = this.party.toString();
      localStorage.setItem("party", myArray);
      console.log(localStorage.getItem("party").split(","));
      this.saved = true;
      this.shadowRoot.getElementById("remove-sound").play();
      this.makeItRain();
    } else {
      localStorage.removeItem("party");
    }
  }


  displayItem(item) {
    if (this.saved) {
      return html`<rpg-character walking seed="${item}"></rpg-character>`;
    } else {
      return html`<rpg-character seed="${item}"></rpg-character>`;
    }
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
      ...super.properties,
      changed: { type: Boolean, reflect: true },
      saved: { type: Boolean, reflect: true },
      party: { type: Array, reflect: true },
    };
  }
}

globalThis.customElements.define(HaxcmsPartyUi.tag, HaxcmsPartyUi);
