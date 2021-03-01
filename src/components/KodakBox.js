class KodakBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  get styles() {
    return `
      :host {
        --black: #161616;
        --gold: #5d5735;
        --yellow: #e6a912;
        --red: #c22d1a;

        z-index: 10;
      }
      .box {
        width: 375px;
        height: 600px;
        background-image:
          linear-gradient(145deg,
            var(--black) 0 220px,
            var(--gold) 221px 225px,
            var(--black) 226px 240px,
            var(--gold) 241px 247px,
            var(--black) 248px 258px,
            var(--gold) 259px 268px,
            var(--black) 269px 276px,
            var(--gold) 277px 285px,
            var(--black) 286px 290px,
            var(--gold) 291px 302px,
            var(--black) 303px 305px,
            var(--yellow) 306px 100%
        );
        transform: translate(25px, -50px);

        display: flex;
        flex-direction: column;
        box-shadow:
          2px 2px 25px rgba(0,0,0, 0.25),
          2px 3px 4px rgb(0 0 0 / 50%);
      }

      .box::before {
        content: "";
        background-image:
          linear-gradient(to top, rgba(0 0 0 / 25%), rgba(0 0 0 / 25%)),
          linear-gradient(to top, var(--black), var(--black));
        position: absolute;
        width: 100%;
        height: 30px;
        transform: skew(45deg) translate(15px, -30px);
      }

      .box::after {
        content: "";
        background-image:
          linear-gradient(to top, rgba(0 0 0 / 50%), rgba(0 0 0 / 50%)),
          linear-gradient(to bottom, var(--black) 0 62%, var(--yellow) 62% 100%);
        position: absolute;
        width: 30px;
        height: 100%;
        transform: skewY(45deg) translate(-30px, 15px);
      }

      .cover {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
      }

      .box .top {
        background: #000;
        color: #fff;
        font-family: Coolvetica;
        text-align: center;
        font-weight: 400;
        line-height: 110%;
        font-size: 164px;
        letter-spacing: 10px;
      }

      .box span {
        font-family: Coolvetica;
      }

      .box .body {
        display: flex;
        align-items: flex-end;
        height: 15%;
        padding: 0 10px 10px;
      }

      .body .logo {
        border: 1px solid #111;
        padding: 0 1px;
        color: #111;
      }

      .body .duration {
        color: #111;
        font-size: 12px;
        padding-left: 8px;
      }

      .center {
        display: flex;
        justify-content: flex-end;
      }

      .open-mark {
        background: var(--black);
        width: 125px;
        height: 175px;
        border-radius: 15px;
        transform: translate(100px, 75px) rotate(-35deg);
      }

      .text {
        display: flex;
        flex-direction: column;
        line-height: 410%;
        transform: rotate(-35deg) translate(-100px, 225px);
      }

      .brand {
        padding-top: 40px;
        font-size: 100px;
        color: var(--red);
        font-weight: 600;
        letter-spacing: 4px;
      }

      .subtitle {
        font-size: 38px;
        text-align: left;
      }

      .model {
        font-size: 72px;
        text-align: center;
        line-height: 40%;
        transform: translateX(-20px);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${this.styles}</style>
      <div class="box">
        <div class="cover">
          <div class="text">
            <span class="brand">Kodak</span>
            <span class="subtitle">VideoCassette</span>
            <span class="model">E-180</span>
          </div>
          <div class="center">
            <div class="open-mark"></div>
          </div>
        </div>
        <div class="body">
          <span class="logo">VHS</span>
          <span class="duration">180 min. (258 metres) of video recording and playback.</span>
        </div>
      </div>
    `;
  }
}

customElements.define("kodak-box", KodakBox);
