import { LitElement, html, css } from "lit";

export class AlertBlock extends LitElement {
  static get tag() {
    return "alert-block";
  }

  constructor() {
    super();
    this.close = false;
    this.sticky = true;
    this.date = "NOVEMBER 17, 2023 12:00 AM";
    this.status = "notice";
  }

  static get styles() {
    return css`
      :host {
        --background-color: #bf8226;
        --foreground-color: #ffd100;
        --dark-text-color: #000321;
        color: #ffffff;
        background-color: var(--background-color);
        width: 100%;
        min-height: 185px;
        display: inline-flex;
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 0.5px;
        line-height: 20px;
        transition: 200ms 250ms all ease-in-out;
      }

      :host([open]) {
        --foreground-color: #ffd100;
        display: inline-flex;
        background-color: var(--foreground-color);
        width: 100%;
        min-height: 54px;
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 0.5px;
        line-height: 20px;
        transition: 200ms 250ms all ease-in-out;
 }

      .alert {
        max-height: 258;
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
        z-index: 0; /* Makes it so that I can have order in the divs? Basically sends it to the back*/
      }

      .alert-date {
        padding: 16px 50px 16px 4px;
        margin: auto;
        max-width: 150px;
      }

      .alert-icon {
        max-width: 46px;
        max-height: 46px;
        padding: 20px 38px 20px 12px;
        flex-grow: 0;
        flex-shrink: 0;
        stroke: var(--dark-text-color);
        z-index: 1;
      }

      .alert-message {
        max-width: 930px;
        min-width: 153px;
        max-height: 258px;
        margin: auto;
        font-family: "Roboto-Bold", sans-serif;
        font-style: italic;
        font-size: 18px;
        letter-spacing: 0.5px;
        line-height: 20px;
        color: var(--dark-text-color);
        text-size-adjust: 100%;
        z-index: 1;
      }

      .alert-info {
        position: relative;
        z-index: 1;
        color: var(--dark-text-color);
      }

      .alert-button {
        padding: 36px 0px 0px 48px;
      }

      .btn {
        border: none;
        background-color: transparent;
        display: inline-flex;
        position: relative;
        font-weight: 700;
        letter-spacing: 0.03rem;
        font-size: 16px;
        color: #ffffff;
        z-index: 1;
      }

      .sticky {
        position: fixed;
        top: 0;
        width: 100%;
      }
    `;
  }

  render() {
    return html`
      <div class="alert">
        <div class="alert-date">
          <p>${this.date}</p>
        </div>
        <!--<div class="alert-left-angle"></div>-->
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
            <p class="alert-message">
              Occaecat laboris incididunt ea labore quis in qui commodo velit
              cillum et commodo. Dolore consectetur eu eu reprehenderit anim
              fugiat in nostrud anim magna enim nisi. Mollit est incididunt sint
              aliqua duis. Deserunt ut velit deserunt fugiat eiusmod. Do
              incididunt laborum aliqua cupidatat adipisicing fugiat
              reprehenderit cillum id. Minim minim elit occaecat id velit fugiat
              ea. Aliqua excepteur ea excepteur cillum esse voluptate non elit
              laboris laboris esse est sunt incididunt ullamco.
              <a href="https://www.psu.edu/news" class="alert-info">
                PENN STATE NEWS</a
              >
            </p>
          </div>
          <div class="alert-button">
            <button class="btn" ?active="${this.fancy}">🞬CLOSE</button>
          </div>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      close: { type: Boolean, reflect: true },
      sticky: { type: Boolean, reflect: true },
      date: { type: Date, reflect: true },
      status: { type: String, reflect: true },
    };
  }
}

globalThis.customElements.define(AlertBlock.tag, AlertBlock);
