class VHSCassetteFilm extends HTMLElement {
  constructor() {
    super();
    this.orientation = this.getAttribute("orientation") === "left" ? "left" : "right";
    this.attachShadow({ mode: "open" });
  }

  get styles() {
    return `
      .circle {
        width: 90px;
        height: 90px;
        border: 10px solid #666;
        border-radius: 50%;
        background: #aaa;
        z-index: 5;
        position: relative;
      }

      .film {
        width: 250px;
        height: 250px;
        background: #222;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transform-origin: 50% 50%;
        animation: playing 2.5s linear infinite;
        will-change: transform;
        position: relative;
        top: -50px;
      }

      .film.left {
        left: 50px;
      }

      .film.right {
        left: -150px;
      }

      .film-shadow {
        width: 250px;
        height: 250px;
        position: absolute;
        border-radius: 50%;
        background: #191919;
        transform: translate(43px, -55px);
      }

      .film-shadow.right {
        display: none;
      }

      .film::after,
          .vhs .film::before {
            content: " ";
            width: 200px;
            height: 25px;
            background: #111;
            border: 4px solid #252525;
            position: absolute;
            z-index: 0;
            top: 108.5px;
            left: 21px;
          }

      .film::after {
            transform-origin: 50% 50%;
            transform: rotateZ(90deg);
          }

      .tape.a .film { left: 50px; }

      .tape.b .film { left: -150px; }

      @keyframes playing {
        0% { transform: rotate(0); }
        100% { transform: rotate(360deg); }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${this.styles}</style>
      <div class="film-shadow ${this.orientation}"></div>
      <div class="film ${this.orientation}">
        <div class="circle"></div>
      </div>
    `;
  }
}

customElements.define("vhs-cassette-film", VHSCassetteFilm);
