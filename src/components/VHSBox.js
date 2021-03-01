class VHSBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  get styles() {
    return `
      :host {
        z-index: 10;
      }
      .box {
        width: 375px;
        height: 600px;
        background: #a1a6a9;
        transform: translate(25px, -50px);

        display: flex;
        flex-direction: column;
        box-shadow:
          2px 2px 25px rgba(0,0,0, 0.25),
          2px 3px 4px rgb(0 0 0 / 50%);
      }

      .box::before {
        content: "";
        background: #171717;
        position: absolute;
        width: 100%;
        height: 30px;
        transform: skew(45deg) translate(15px, -30px);
      }

      .box::after {
        content: "";
        background: linear-gradient(to bottom,
          black 0 180px,
          #2b1762 180px 215px,
          #a72362 215px 250px,
          #d8181e 250px 285px,
          #d46f09 285px 320px,
          #999 320px 100%
        );
        position: absolute;
        width: 30px;
        height: 100%;
        transform: skewY(45deg) translate(-30px, 15px);
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

      .lines div {
        height: 35px;
      }
      .line-1 {
        background: #362073;
        font-family: Coolvetica;
        font-size: 29px;
        letter-spacing: 1px;
        color: #fff;
        text-align: right;
        padding: 0 10px;
      }
      .line-2 { background: #c33277 }
      .line-3 { background: #f5262e }
      .line-4 { background: #f88412 }

      .box span {
        font-family: Coolvetica;
      }

      .box .body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        height: 100%;
        padding: 0 10px 10px;
      }

      .open-mark {
        background: black;
        width: 90px;
        height: 150px;
        transform: translate(11px, 0);
        clip-path: polygon(100% 0, 10% 40%, 2.5% 45%, 0 50%, 2.5% 55%, 10% 60%, 100% 100%);
      }

      .brand {
        font-size: 42px;
        font-weight: 400;
      }

      .duration {
        font-size: 24px;
        color: #333;
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
        <div class="top">T-120</div>
        <div class="lines">
          <div class="line-1">VIDEO CASSETTE</div>
          <div class="line-2"></div>
          <div class="line-3"></div>
          <div class="line-4"></div>
        </div>
        <div class="body">
          <span class="brand">VHS</span>
          <div class="open-mark"></div>
          <span class="duration">2-4-6 HRS.</span>
        </div>
      </div>
    `;
  }
}

customElements.define("vhs-box", VHSBox);
