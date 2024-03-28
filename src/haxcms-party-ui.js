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
    this.changed = false;
    this.party =
      localStorage.getItem("party") != null
        ? localStorage.getItem("party").split(",")
        : ["zpg"];
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: center;
        }
        .block {
          width: var(--haxcms-party-ui-container, 90vw);
          padding: var(--ddd-spacing-);
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
          margin: 0px 0px -50px 30px;
        }

        .button-panel {
          display: flex;
          margin-left: var(--ddd-spacing-4);
        }
        .party {
          display: inline-flexbox;
          max-width: var(--haxcms-party-ui-party-width,90vw);
          height: var(--haxcms-party-ui-party-height, 300px);
          margin: var(--ddd-spacing-5);
          color: var(--ddd-theme-default-roarMaxlight);
        }

        .search-input {
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
          color:var(--ddd-theme-default-slateMaxLight);
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
      `,
    ];
  }

  deleteData() {
    localStorage.removeItem("party");
  }

  render() {
    return html`
      <confetti-container id="confetti">
        <div class="block">
          <h1 class="title">CHOOSE YOUR PARTY</h1>
          <div class="container">
            <div class="button-panel">
              <input
                type="search"
                class="search-input"
                placeholder="Search party member..."
              />
              <button class="add-button" @click="${this.addUser}">Add</button>
              <button class="remove-button" @click="${this.remove}">
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
    /*
    const searchInput = document.querySelector(".search-input");
    this.party = [...this.party, searchInput.value.toString()];
    this.makeItRain();
    
    */
    this.party = [...this.party, null];
    this.changed = true;
  }

  saveData() {
    if (this.changed) {
      const myArray = this.party.toString();
      localStorage.setItem("party", myArray);
      console.log(localStorage.getItem("party").split(","));
      this.makeItRain();
    } else {
      localStorage.removeItem("party");
    }
  }

  remove() {
    this.changed = false;
  }

  handleInput(event) {
    const inputValue = event.target.value;
    // Remove any characters that are not lowercase letters or numbers (Adam's Notes)
    const sanitizedValue = inputValue.replace(/[^a-z0-9]/g, "");
    event.target.value = sanitizedValue.slice(0, 10); // Limit to 10 characters
  }

  addItem() {
    const input = document.querySelector(".search-input").value;
    // Validate if input is not empty
    if (input.trim() !== "") {
      // Add only if the party size is less than 5
      if (this.party.length < 5) {
        // Add to party if input matches criteria
        if (/^[a-z0-9]{1,10}$/.test(input)) {
          // Check if the user is already in the party
          if (!this.party.includes(input)) {
            // Display confirmation alert
            const confirmed = window.confirm(`Add ${input} to the party?`);
            if (confirmed) {
              this.party = [...this.party, input];
            }
          } else {
            window.alert("User is already in the party.");
          }
        } else {
          window.alert(
            "Input must contain only lowercase letters and numbers, with no spaces and maximum length of 10 characters."
          );
        }
      } else {
        window.alert("Party is full.");
      }
    } else {
      window.alert("Input cannot be empty.");
    }
  }
  displayItem(item) {
    return html`<rpg-character seed="${item}"></rpg-character>`;
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
      party: { type: Array, reflect: true },
    };
  }
}

globalThis.customElements.define(HaxcmsPartyUi.tag, HaxcmsPartyUi);
