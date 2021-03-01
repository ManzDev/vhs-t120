const MODELS = {
  vhs: "T-120",
  kodak: "Kodak"
};

class VHSCassetteLabel extends HTMLElement {
  constructor() {
    super();
    this.model = this.getAttribute("model");
    console.log(this.model);
    this.attachShadow({ mode: "open" });
  }

  get styles() {
    return `
      :host-context([model="vhs"]) {
        width: 245px;
        height: 140px;
        cursor: pointer;
        border-radius: 15px;
        font-family: Coolvetica, Impact, sans-serif;
        font-weight: 800;
        font-size: 52px;
        text-align: right;
        line-height: 400%;
        color: #000;
        letter-spacing: 4px;
        border: 4px solid #ccc;
        background: linear-gradient(130deg, #362073 0 10%, #c33277 10% 20%, #f5262e 20% 30%, #f88412 30% 40%, #ccc 40% 100%);
      }

      :host-context([model="kodak"]) {
        width: 245px;
        height: 140px;
        cursor: pointer;
        border-radius: 15px;
        font-family: Coolvetica, Impact, sans-serif;
        font-weight: 800;
        font-size: 52px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        color: #c22d1a;
        letter-spacing: 4px;
        border: 4px solid #161616;
        background: #e6a912;
      }

      span {
        padding: 20px 10px;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${this.styles}</style>
      <div class="label">
        <span>${MODELS[this.model]}</span>
      </div>
    `;
  }
}

customElements.define("vhs-cassette-label", VHSCassetteLabel);
