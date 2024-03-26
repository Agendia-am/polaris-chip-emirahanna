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
    this.saved = false;
    this.party = ["ezy5092", "user", "zpg", "meowmeoweoaok", ""];
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: center;
        }
        .container {
          background-color: var(--ddd-theme-default-beaverBlue);
          height: var(--haxcms-party-ui-container,620px);
          padding: var(--ddd-spacing-4);
          color: var(--ddd-theme-default-beaverBlue);
        }
        .button-panel {
          display: flex;
          margin-left: var(--ddd-spacing-4);;
        }
        .party{
          display: flex;
          margin:  var(--ddd-spacing-5);
          color: white; 
        }

        .search-input {
          font-family: "Press Start 2P", system-ui;
          min-width: var(--haxcms-party-ui-searchbar, 150px);
          margin: var(--ddd-spacing-3);
          padding: var(--ddd-spacing-6);
          background-color: var(--ddd-theme-default-slateMaxLight);
        }

        button {
          font-family: "Press Start 2P", system-ui;
          font-size: var(--ddd-font-size-3xs);
          font-weight: 500;
          color: blue;
          min-width: 150px;
          margin: var(--ddd-spacing-3);
          padding: var(--ddd-spacing-5);
          border: var(--ddd-border-sm);
          border-color: var(--ddd-theme-default-nittanyNavy);
          background-color: var(--ddd-theme-default-roarMaxlight);
        }

        button:hover {
          background-color: var(--ddd-theme-default-nittanyNavy);
          color: var(--ddd-theme-default-roarMaxlight);
          transform: scale(1.1);
          transition: all 300ms ease-in-out
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
            ${this.party.map((item) => html`<rpg-character seed=${item}></rpg-character><p>${item}</p>`)}
          <!-- this is property drilling. not the best idea-->
          </div>
          <button class="save-button" @click="${this.makeItRain}">
            Save Party Members
          </button>
        </div>
      </confetti-container>
    `;
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

  updateContainer() {
    const container = this.shadowRoot.querySelector(".party");
    this.party.forEach((item) => {
      this.displayItem(item);
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
