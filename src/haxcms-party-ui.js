import "@lrnwebcomponents/rpg-character/rpg-character.js";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import { html, css } from "lit";
import { RpgUser } from "./rpg-user";

export class HaxcmsPartyUi extends DDD {
  static get tag() {
    return "haxcms-party-ui";
  }

  /*
  HI WILL (Or Dhari, or Donovan, idk Will is usually the one who grades my stuff)
  QUICK QUESTION. So for some reason my search input, the input html tag one, only works when I make search-input an Id, and not a class.
  I'm not sure why that is, but it works so I'm not going to question it. I'm just curious if you know why that is.
  Thank you for your service and time! Stay cool 😎
  */

  constructor() {
    super();
    /* make the writing in the sarch bar destaurated */

    /** tags on th chracters */
    this.index = 0;
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

        :host([saved]) {
          transform: rotate(360deg);
          transition: transform 1s;
        }
        .block {
          width: var(--haxcms-party-ui-container, 96vw);
          padding: var(--ddd-spacing-6);
          background-color: var(--ddd-theme-default-potentialMidnight);
        }

        .container {
          margin: var(--ddd-spacing-4);
          padding: var(--ddd-spacing-6);
          border: 10px solid var(--ddd-theme-default-nittanyNavy);
          box-shadow: -5px 0 0 0 var(--ddd-theme-default-beaverBlue), 5px 0 0 0 var(--ddd-theme-default-beaverBlue), 0 -5px 0 0 var(--ddd-theme-default-beaverBlue),
            0 5px 0 0 var(--ddd-theme-default-beaverBlue);
        }

        .title {
          font-family: "Press Start 2P", system-ui;
          background-color: (var(--ddd-theme-default-roarMaxlight), white);
          color: var(--ddd-theme-default-keystoneYellow);
          margin: 0px 0px 50px 30px;
          text-align: center;
          animation: blinker 1.5s linear infinite;
          text-shadow: 2px 4px 4px rgba(46, 91, 173, 0.6);
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
          margin: 4px, 4px;
          padding: 4px;
          overflow-x: hidden;
          overflow-y: visible;
          text-align: justify;
          box-shadow: -5px 0 0 0 var(--ddd-theme-default-beaverBlue), 5px 0 0 0 var(--ddd-theme-default-beaverBlue), 0 -5px 0 0 var(--ddd-theme-default-beaverBlue),
            0 5px 0 0 var(--ddd-theme-default-beaverBlue);
        }

        .characters {
          color: var(--ddd-theme-default-wonderPurple);
          display: inline-flex;
          flex-wrap: wrap;
        }

        #search-input {
          font-family: "Press Start 2P", system-ui;
          font-size: var(--ddd-font-size-3xs);
          min-width: var(--haxcms-party-ui-search-input-min-width, 20vw);
          max-width: var(--haxcms-party-ui-search-input-max-width, 60vw);
          margin: var(--ddd-spacing-3);
          padding: var(--ddd-spacing-5);
          background-color: var(--ddd-theme-default-slateMaxLight);
          color: var(--ddd-theme-default-wonderPurple);
          box-shadow: -5px 0 0 0 var(--ddd-theme-default-coalyGray), 5px 0 0 0 var(--ddd-theme-default-coalyGray), 0 -5px 0 0 var(--ddd-theme-default-coalyGray),
            0 5px 0 0 var(--ddd-theme-default-coalyGray);
        }

        .add-button {
          font-family: "Press Start 2P", system-ui;
          font-size: var(--ddd-font-size-3xs);
          min-width: 150px;
          margin: var(--ddd-spacing-3);
          padding: var(--ddd-spacing-5);
          background-color: var(--ddd-theme-default-keystoneYellow);
          color: var(--ddd-theme-default-wonderPurple);
          box-shadow: -5px 0 0 0 var(--ddd-theme-default-coalyGray), 5px 0 0 0 var(--ddd-theme-default-coalyGray), 0 -5px 0 0 var(--ddd-theme-default-coalyGray),
            0 5px 0 0 var(--ddd-theme-default-coalyGray);
        }

        .remove-button {
          font-family: "Press Start 2P", system-ui;
          font-size: var(--ddd-font-size-3xs);
          min-width: 150px;
          margin: var(--ddd-spacing-3);
          padding: var(--ddd-spacing-5);
          background-color: var(--ddd-theme-default-original87Pink);
          color: var(--ddd-theme-default-slateMaxLight);
          box-shadow: -5px 0 0 0 var(--ddd-theme-default-coalyGray), 5px 0 0 0 var(--ddd-theme-default-coalyGray), 0 -5px 0 0 var(--ddd-theme-default-coalyGray),
            0 5px 0 0 var(--ddd-theme-default-coalyGray);
        }
        .save-button {
          font-family: "Press Start 2P", system-ui;
          font-size: var(--ddd-font-size-3xs);
          min-width: 150px;
          margin: var(--ddd-spacing-3);
          padding: var(--ddd-spacing-5);
          background-color: var(--ddd-theme-default-link);
          color: var(--ddd-theme-default-slateMaxLight);
          box-shadow: -5px 0 0 0 var(--ddd-theme-default-coalyGray), 5px 0 0 0 var(--ddd-theme-default-coalyGray), 0 -5px 0 0 var(--ddd-theme-default-coalyGray),
            0 5px 0 0 var(--ddd-theme-default-coalyGray);
        }

        button:hover,
        button:focus {
          background-color: var(--ddd-theme-default-roarMaxlight);
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
      <audio id="coin-sound" src="./media/coin sound.wav" crossOrigin="anonymous"></audio>
      <audio id="remove-sound" src="./media/remove sound.mp3" crossOrigin="anonymous"></audio>
      <confetti-container id="confetti">
        <div class="block">
          <h1 class="title">CHOOSE YOUR PARTY</h1>
          <div class="container">
            <div class="button-panel">
              <input
                type="search"
                id="search-input"
                placeholder="Search party member..."
                @keydown="${this.pressEnter}"
              />
              <button class="add-button" @click="${this.addUser}">Add</button>
              <button class="remove-button" @click="${this.removeUser}">
                Remove
              </button>
            </div>
            <div class="party">
              ${this.party.map((item, index) => html`
              <div class="characters" @click="${(e) => this.selectCharacter(e, index)}">
              ${this.displayItem(item)}
            </div>
              `)}
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
    // Get the value of the input element
    const input = this.shadowRoot.getElementById("search-input");
    // Trim the value of the input element
    const username = input.value.trim();
    // Check if the input is not empty
    if (username !== "") {
      // Check if the input is a valid username (lowercase letters and numbers only, 1-15 characters long)
      if (/^[a-z0-9]{1,15}$/.test(username)) {
        if (!this.party.includes(username)) {
          this.party = [...this.party, username];
          this.toggleChanged();
          this.shadowRoot.getElementById("coin-sound").play();
          this.saved = false;
        } else {
          window.alert(username + " is already in the party.");
        }
      } else {
        window.alert("Username must be:\n\t1.Lowercase letters\n\t2.Numbers only\n\t3.Maximum 15 characters");
      }
      this.shadowRoot.getElementById("search-input").value = "";
      this.shadowRoot.getElementById("search-input").focus();

    }
  }

  pressEnter(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      this.addUser();

    }
  }
  selectCharacter(event, index) {
    // Find the selected user element in the party
    const selectedCharacter = event.target.closest(".characters");
    const selectedUserName = selectedCharacter.querySelector("rpg-user").name;

    // Find index of the selected user in the party array
    const selectedIndex = this.party.findIndex(user => user === selectedUserName);
    this.index = selectedIndex;
    console.log(this.index + " " + selectedUserName);
  }

  removeUser() {
    // Remove the selected user from the party array
    this.party.splice(this.index, 1);
    this.party = [...this.party];
    // Access the rpg-user element corresponding to the removed user
    const removedUserElement = this.shadowRoot.querySelectorAll("rpg-user")[this.index];
    // Set its selected property to false
    removedUserElement.selected = false;
    this.shadowRoot.getElementById("remove-sound").play();
  }

  toggleChanged() {
    this.changed = !this.changed;
  }

  deleteData() {
    localStorage.removeItem("party");
  }

  saveData() {
    if (this.party.length >= 1) {
      // Convert the party array to a string and save it to local storage
      const myArray = this.party.toString();
      localStorage.setItem("party", myArray);
      console.log(localStorage.getItem("party").split(",")); //testing
      // Set the saved property to true
      this.saved = true;
      // Play the coin sound audio
      this.shadowRoot.getElementById("coin-sound").play();
      // Make it rain confetti
      this.makeItRain();
      window.alert("Party members saved: " + this.party + "\n" + "You can now close the tab.");
    }
    else {
      window.alert("You need at least 1 party member to save.");
    }
  }

  displayItem(item) {
    // Return the rpg-user element with the name attribute set to the item
    return html`<rpg-user name=${item}></rpg-user>`;
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
