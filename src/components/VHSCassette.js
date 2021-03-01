class VHSCassette extends HTMLElement {
  constructor() {
    super();
    this.model = this.getAttribute("model") || "classic";
    this.attachShadow({ mode: "open" });
  }

  get styles() {
    return `
      .vhs {
        width: 700px;
        height: 340px;
        background: #222;
        box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.5);

        position: relative;
        z-index: 1;
      }

      .vhs::after {
        content: "";
        background: #191919;
        position: absolute;
        width: 100%;
        height: 30px;
        top: 0;
        transform: skew(45deg) translate(15px, -30px);
      }

      .vhs::before {
        content: "";
        background: linear-gradient(to bottom, #111 0 65px, #191919 65px 100%);
        position: absolute;
        width: 30px;
        height: 100%;
        transform: skewY(45deg) translate(-30px, 15px);
      }

      .vhs .top {
          border: 5px solid #111;
          border-top: 25px solid #111;
          border-bottom: 0;
          height: 40px;
          position: relative;
        }

      .vhs .top::after,
          .vhs .top::before {
            font-family: Cabin, sans-serif;
            color: #555;
            position: absolute;
          }

      .vhs .top::before {
            content: "VHS";
            border: 1px solid #333;
            font-size: 10px;
            top: -20px;
            right: 10px;
          }

      .vhs .top::after {
            content: "Insert this side into recorder 🠝 Do not touch the tape inside";
            font-size: 12px;
            position: relative;
            top: -22px;
            text-align: center;
            display: block;
          }

      .vhs .center {
          width: 600px;
          height: 150px;
          margin: 20px auto;
          background: #292929;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          border-top-left-radius: 50px 75px;
          border-bottom-left-radius: 50px 75px;
          border-top-right-radius: 50px 75px;
          border-bottom-right-radius: 50px 75px;
        }

      .vhs .tape {
        width: 150px;
        height: 150px;
        background: #666;
        overflow: hidden;
        position: relative;
      }

      .vhs .tape.a {
        border-top-left-radius: 50px 75px;
        border-bottom-left-radius: 50px 75px;
      }

      .vhs .tape.b {
        border-top-right-radius: 50px 75px;
        border-bottom-right-radius: 50px 75px;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${this.styles}</style>
      <div class="vhs">
        <div class="top"></div>
        <div class="center">
          <div class="tape a">
            <vhs-cassette-film orientation="left"></vhs-cassette-film>
          </div>
          <vhs-cassette-label model="${this.model}"></vhs-cassette-label>
          <div class="tape b">
            <vhs-cassette-film orientation="right"></vhs-cassette-film>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("vhs-cassette", VHSCassette);
