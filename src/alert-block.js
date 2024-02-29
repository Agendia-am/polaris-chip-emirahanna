import { LitElement, html, css } from "lit";

export class AlertBlock extends LitElement {
  static get tag() {
    return "alert-block";
  }

  constructor() {
    super();
    this.close = (localStorage.getItem("isClosed") == "true"? true : false);
    this.sticky = false;
    this.date = "NOVEMBER 17, 2023 12:00 AM";
    this.status = "warning";
    this.link = "https://www.psu.edu/news";
    this.message =
      "Occaecat laboris incididunt ea labore quis in qui commodo velit cillum et commodo. Dolore consectetur eu eu reprehenderit anim fugiat in nostrud anim magna enim nisi. Mollit est incididunt sin aliqua duis. Deserunt ut velit deserunt fugiat eiusmod. Doincididunt laborum aliqua cupidatat adipisicing fugiat reprehenderit cillum id. Minim minim elit occaecat id velit fugiat ea. Aliqua excepteur ea excepteur cillum esse voluptate non elit laboris laboris esse est sunt incididunt ullamco.";
  }

  static get styles() {
    return css`
      :host {
        --foreground-color: #ffd100;
        --background-color: #bf8226;
        --foreground-text-color: #000321;
        --background-text-color: #ffffff;
        background-color: var(--background-color);
        width: 100%;
        height: 185px;
        display: inline-flex;
        font-family: "Arial", sans-serif;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 0.5px;
        line-height: 20px;
        transition: all 200ms 200ms ease-in-out;
      }

      :host([status="alert"]) {
        --foreground-color: #bf3026;
        --background-color: #000000;
        --foreground-text-color: #ffffff;
        --background-text-color: #ffffff;
      }

      :host([status="notice"]) {
        --foreground-color: lightblue;
        --background-color: blue;
        --foreground-text-color: #ffffff;
        --background-text-color: #ffffff;
      }

      :host([sticky]) {
        position: sticky;
        top: 0;
        z-index: 1;
      }

      :host([close]) {
        height: 50px;
        transition: all 200ms 200ms linear;
        background-color: var(--foreground-color);
      }

      :host([sticky]) {
        position: sticky;
        top: 0;
      }

      .alert {
        max-height: 258px;
        display: inline-flex;
        padding: 0px 62px 0px 62px;
        justify-content: space-between; /* to push items to opposite ends */
      }

      .alert-content {
        display: inline-flex;
        position: relative;
      }

      .alert-content::before {
        display: inline-flex;
        content: " ";
        width: 0;
        height: 0;
        position: absolute;
        bottom: 2rem;
        left: -0.8rem;
        border-left: 35px solid transparent;
        border-right: 0px solid transparent;
        border-bottom: 30px solid var(--foreground-color);
      }

      .paralellogram {
        display: inline-flex;
        position: relative;
      }

      .paralellogram::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 1023px;
        height: 100%;
        max-height: 258px;
        transform: skew(20deg);
        background-color: var(--foreground-color);
        }

      .alert-date {
        padding: 16px 50px 16px 4px;
        margin: auto;
        width: 150px;
      }

      .alert-icon {
        max-width: 46px;
        max-height: 46px;
        padding: 20px 38px 20px 12px;
        color: var(--foreground-text-color);
        stroke: var(--foreground-text-color);

      }

      .alert-icon.closed {
        min-height: 30px;
        min-width: 30px;
        margin: auto;
      }

      .alert-message {
        width: 910px;
        max-width: 910px;
        min-width: 153px;
        max-height: 185px;
        margin: auto;
        font-family: "Roboto-Bold", sans-serif;
        font-style: italic;
        font-size: 18px;
        letter-spacing: 0.5px;
        line-height: 20px;
        color: var(--foreground-text-color);
        text-size-adjust: 100%;
        overflow: hidden;
      }

      .alert-info {
        color: var(--foreground-text-color);
      }

      .alert-button {
        padding: 1%;
        float: right;
      }

      .btn {
        border: none;
        background-color: transparent;
        display: inline-flex;
        font-weight: 700;
        letter-spacing: 0.03rem;
        font-size: 16px;
        color: var(--background-text-color);
      }
    `;
  }

  render() {
    const msg = this.close? "TEST CAMPUS ALERT" :  this.message ;
    const dt = this.close? "" :  this.date;
    return html`
      <div class="alert">
        <div class="alert-date">
          <p>${dt}</p>
        </div>
        <div class="paralellogram">
          <div class="alert-content">
            <!-- The Exclamation Mark Vector-->
            <svg
              class="alert-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 82 82"
            >
              <g transform="translate(-350.099 -428.714)">
                <g
                  transform="translate(350.099 428.714)"
                  fill="none"
                  stroke-width="6"
                >
                  <circle cx="41" cy="41" r="41" stroke="none"></circle>
                  <circle cx="41" cy="41" r="38" fill="none"></circle>
                </g>
                <g transform="translate(384.41 448.566)">
                  <rect
                    width="10.381"
                    height="7.786"
                    transform="translate(0.919 34.336)"
                  ></rect>
                  <path
                    d="M6520.672,2327.554h-5.854l-3.21-23.669V2299.2h11.81v4.681Z"
                    transform="translate(-6511.607 -2299.203)"
                  ></path>
                </g>
              </g>
            </svg>
            <div class="alert-message">
              <slot> ${msg} </slot>
            </div>
          </div>
          <div class="alert-button">
            <button class="btn" @click=${this.toggleButton}>🞬CLOSE</button>
          </div>
        </div>
      </div>
    `;
  }

  updated(changedProperties) {
    if (changedProperties.has("close")) {
      if (this.close) {
        localStorage.setItem("isClosed", (this.close).toString());
      }
      else{
        localStorage.removeItem("isClosed");
      }
    }
  }
  toggleButton() {
    this.close = !this.close;
  }
  static get properties() {
    return {
      close: { type: Boolean, reflect: true },
      sticky: { type: Boolean, reflect: true },
      date: { type: Date, reflect: true },
      status: { type: String, reflect: true },
      message: { type: String, reflect: true },
      link: { type: String, reflect: true },
    };
  }
}

globalThis.customElements.define(AlertBlock.tag, AlertBlock);
