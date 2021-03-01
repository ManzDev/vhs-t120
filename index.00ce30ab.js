!function(n=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(t){const o=new URL(n,location),i=n=>{URL.revokeObjectURL(n.src),n.remove()};self[e]=n=>new Promise(((t,s)=>{const a=new URL(n,o);if(self[e].moduleMap[a])return t(self[e].moduleMap[a]);const r=new Blob([`import * as m from '${a}';`,`${e}.moduleMap['${a}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){s(new Error(`Failed to import: ${n}`)),i(l)},onload(){t(self[e].moduleMap[a]),i(l)}});document.head.appendChild(l)})),self[e].moduleMap={}}}("/vhs-t120/");const n={vhs:"T-120",kodak:"Kodak"};class e extends HTMLElement{constructor(){super(),this.model=this.getAttribute("model"),console.log(this.model),this.attachShadow({mode:"open"})}get styles(){return'\n      :host-context([model="vhs"]) {\n        width: 245px;\n        height: 140px;\n        cursor: pointer;\n        border-radius: 15px;\n        font-family: Coolvetica, Impact, sans-serif;\n        font-weight: 800;\n        font-size: 52px;\n        text-align: right;\n        line-height: 400%;\n        color: #000;\n        letter-spacing: 4px;\n        border: 4px solid #ccc;\n        background: linear-gradient(130deg, #362073 0 10%, #c33277 10% 20%, #f5262e 20% 30%, #f88412 30% 40%, #ccc 40% 100%);\n      }\n\n      :host-context([model="kodak"]) {\n        width: 245px;\n        height: 140px;\n        cursor: pointer;\n        border-radius: 15px;\n        font-family: Coolvetica, Impact, sans-serif;\n        font-weight: 800;\n        font-size: 52px;\n        display: flex;\n        justify-content: flex-end;\n        align-items: flex-end;\n        color: #c22d1a;\n        letter-spacing: 4px;\n        border: 4px solid #161616;\n        background: #e6a912;\n      }\n\n      span {\n        padding: 20px 10px;\n      }\n    '}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`\n      <style>${this.styles}</style>\n      <div class="label">\n        <span>${n[this.model]}</span>\n      </div>\n    `}}customElements.define("vhs-cassette-label",e);class t extends HTMLElement{constructor(){super(),this.orientation="left"===this.getAttribute("orientation")?"left":"right",this.attachShadow({mode:"open"})}get styles(){return'\n      .circle {\n        width: 90px;\n        height: 90px;\n        border: 10px solid #666;\n        border-radius: 50%;\n        background: #aaa;\n        z-index: 5;\n        position: relative;\n      }\n\n      .film {\n        width: 250px;\n        height: 250px;\n        background: #222;\n        border-radius: 50%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        transform-origin: 50% 50%;\n        animation: playing 2.5s linear infinite;\n        will-change: transform;\n        position: relative;\n        top: -50px;\n      }\n\n      .film.left {\n        left: 50px;\n      }\n\n      .film.right {\n        left: -150px;\n      }\n\n      .film-shadow {\n        width: 250px;\n        height: 250px;\n        position: absolute;\n        border-radius: 50%;\n        background: #191919;\n        transform: translate(43px, -55px);\n      }\n\n      .film-shadow.right {\n        display: none;\n      }\n\n      .film::after,\n          .vhs .film::before {\n            content: " ";\n            width: 200px;\n            height: 25px;\n            background: #111;\n            border: 4px solid #252525;\n            position: absolute;\n            z-index: 0;\n            top: 108.5px;\n            left: 21px;\n          }\n\n      .film::after {\n            transform-origin: 50% 50%;\n            transform: rotateZ(90deg);\n          }\n\n      .tape.a .film { left: 50px; }\n\n      .tape.b .film { left: -150px; }\n\n      @keyframes playing {\n        0% { transform: rotate(0); }\n        100% { transform: rotate(360deg); }\n      }\n    '}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`\n      <style>${this.styles}</style>\n      <div class="film-shadow ${this.orientation}"></div>\n      <div class="film ${this.orientation}">\n        <div class="circle"></div>\n      </div>\n    `}}customElements.define("vhs-cassette-film",t);class o extends HTMLElement{constructor(){super(),this.model=this.getAttribute("model")||"classic",this.attachShadow({mode:"open"})}get styles(){return'\n      .vhs {\n        width: 700px;\n        height: 340px;\n        background: #222;\n        box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.5);\n\n        position: relative;\n        z-index: 1;\n      }\n\n      .vhs::after {\n        content: "";\n        background: #191919;\n        position: absolute;\n        width: 100%;\n        height: 30px;\n        top: 0;\n        transform: skew(45deg) translate(15px, -30px);\n      }\n\n      .vhs::before {\n        content: "";\n        background: linear-gradient(to bottom, #111 0 65px, #191919 65px 100%);\n        position: absolute;\n        width: 30px;\n        height: 100%;\n        transform: skewY(45deg) translate(-30px, 15px);\n      }\n\n      .vhs .top {\n          border: 5px solid #111;\n          border-top: 25px solid #111;\n          border-bottom: 0;\n          height: 40px;\n          position: relative;\n        }\n\n      .vhs .top::after,\n          .vhs .top::before {\n            font-family: Cabin, sans-serif;\n            color: #555;\n            position: absolute;\n          }\n\n      .vhs .top::before {\n            content: "VHS";\n            border: 1px solid #333;\n            font-size: 10px;\n            top: -20px;\n            right: 10px;\n          }\n\n      .vhs .top::after {\n            content: "Insert this side into recorder 🠝 Do not touch the tape inside";\n            font-size: 12px;\n            position: relative;\n            top: -22px;\n            text-align: center;\n            display: block;\n          }\n\n      .vhs .center {\n          width: 600px;\n          height: 150px;\n          margin: 20px auto;\n          background: #292929;\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          padding: 10px;\n          border-top-left-radius: 50px 75px;\n          border-bottom-left-radius: 50px 75px;\n          border-top-right-radius: 50px 75px;\n          border-bottom-right-radius: 50px 75px;\n        }\n\n      .vhs .tape {\n        width: 150px;\n        height: 150px;\n        background: #666;\n        overflow: hidden;\n        position: relative;\n      }\n\n      .vhs .tape.a {\n        border-top-left-radius: 50px 75px;\n        border-bottom-left-radius: 50px 75px;\n      }\n\n      .vhs .tape.b {\n        border-top-right-radius: 50px 75px;\n        border-bottom-right-radius: 50px 75px;\n      }\n    '}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`\n      <style>${this.styles}</style>\n      <div class="vhs">\n        <div class="top"></div>\n        <div class="center">\n          <div class="tape a">\n            <vhs-cassette-film orientation="left"></vhs-cassette-film>\n          </div>\n          <vhs-cassette-label model="${this.model}"></vhs-cassette-label>\n          <div class="tape b">\n            <vhs-cassette-film orientation="right"></vhs-cassette-film>\n          </div>\n        </div>\n      </div>\n    `}}customElements.define("vhs-cassette",o);class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}get styles(){return'\n      :host {\n        z-index: 10;\n      }\n      .box {\n        width: 375px;\n        height: 600px;\n        background: #a1a6a9;\n        transform: translate(25px, -50px);\n\n        display: flex;\n        flex-direction: column;\n        box-shadow:\n          2px 2px 25px rgba(0,0,0, 0.25),\n          2px 3px 4px rgb(0 0 0 / 50%);\n      }\n\n      .box::before {\n        content: "";\n        background: #171717;\n        position: absolute;\n        width: 100%;\n        height: 30px;\n        transform: skew(45deg) translate(15px, -30px);\n      }\n\n      .box::after {\n        content: "";\n        background: linear-gradient(to bottom,\n          black 0 180px,\n          #2b1762 180px 215px,\n          #a72362 215px 250px,\n          #d8181e 250px 285px,\n          #d46f09 285px 320px,\n          #999 320px 100%\n        );\n        position: absolute;\n        width: 30px;\n        height: 100%;\n        transform: skewY(45deg) translate(-30px, 15px);\n      }\n\n      .box .top {\n        background: #000;\n        color: #fff;\n        font-family: Coolvetica;\n        text-align: center;\n        font-weight: 400;\n        line-height: 110%;\n        font-size: 164px;\n        letter-spacing: 10px;\n      }\n\n      .lines div {\n        height: 35px;\n      }\n      .line-1 {\n        background: #362073;\n        font-family: Coolvetica;\n        font-size: 29px;\n        letter-spacing: 1px;\n        color: #fff;\n        text-align: right;\n        padding: 0 10px;\n      }\n      .line-2 { background: #c33277 }\n      .line-3 { background: #f5262e }\n      .line-4 { background: #f88412 }\n\n      .box span {\n        font-family: Coolvetica;\n      }\n\n      .box .body {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        align-items: flex-end;\n        height: 100%;\n        padding: 0 10px 10px;\n      }\n\n      .open-mark {\n        background: black;\n        width: 90px;\n        height: 150px;\n        transform: translate(11px, 0);\n        clip-path: polygon(100% 0, 10% 40%, 2.5% 45%, 0 50%, 2.5% 55%, 10% 60%, 100% 100%);\n      }\n\n      .brand {\n        font-size: 42px;\n        font-weight: 400;\n      }\n\n      .duration {\n        font-size: 24px;\n        color: #333;\n      }\n    '}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`\n      <style>${this.styles}</style>\n      <div class="box">\n        <div class="top">T-120</div>\n        <div class="lines">\n          <div class="line-1">VIDEO CASSETTE</div>\n          <div class="line-2"></div>\n          <div class="line-3"></div>\n          <div class="line-4"></div>\n        </div>\n        <div class="body">\n          <span class="brand">VHS</span>\n          <div class="open-mark"></div>\n          <span class="duration">2-4-6 HRS.</span>\n        </div>\n      </div>\n    `}}customElements.define("vhs-box",i);class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}get styles(){return'\n      :host {\n        --black: #161616;\n        --gold: #5d5735;\n        --yellow: #e6a912;\n        --red: #c22d1a;\n\n        z-index: 10;\n      }\n      .box {\n        width: 375px;\n        height: 600px;\n        background-image:\n          linear-gradient(145deg,\n            var(--black) 0 220px,\n            var(--gold) 221px 225px,\n            var(--black) 226px 240px,\n            var(--gold) 241px 247px,\n            var(--black) 248px 258px,\n            var(--gold) 259px 268px,\n            var(--black) 269px 276px,\n            var(--gold) 277px 285px,\n            var(--black) 286px 290px,\n            var(--gold) 291px 302px,\n            var(--black) 303px 305px,\n            var(--yellow) 306px 100%\n        );\n        transform: translate(25px, -50px);\n\n        display: flex;\n        flex-direction: column;\n        box-shadow:\n          2px 2px 25px rgba(0,0,0, 0.25),\n          2px 3px 4px rgb(0 0 0 / 50%);\n      }\n\n      .box::before {\n        content: "";\n        background-image:\n          linear-gradient(to top, rgba(0 0 0 / 25%), rgba(0 0 0 / 25%)),\n          linear-gradient(to top, var(--black), var(--black));\n        position: absolute;\n        width: 100%;\n        height: 30px;\n        transform: skew(45deg) translate(15px, -30px);\n      }\n\n      .box::after {\n        content: "";\n        background-image:\n          linear-gradient(to top, rgba(0 0 0 / 50%), rgba(0 0 0 / 50%)),\n          linear-gradient(to bottom, var(--black) 0 62%, var(--yellow) 62% 100%);\n        position: absolute;\n        width: 30px;\n        height: 100%;\n        transform: skewY(45deg) translate(-30px, 15px);\n      }\n\n      .cover {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        overflow: hidden;\n      }\n\n      .box .top {\n        background: #000;\n        color: #fff;\n        font-family: Coolvetica;\n        text-align: center;\n        font-weight: 400;\n        line-height: 110%;\n        font-size: 164px;\n        letter-spacing: 10px;\n      }\n\n      .box span {\n        font-family: Coolvetica;\n      }\n\n      .box .body {\n        display: flex;\n        align-items: flex-end;\n        height: 15%;\n        padding: 0 10px 10px;\n      }\n\n      .body .logo {\n        border: 1px solid #111;\n        padding: 0 1px;\n        color: #111;\n      }\n\n      .body .duration {\n        color: #111;\n        font-size: 12px;\n        padding-left: 8px;\n      }\n\n      .center {\n        display: flex;\n        justify-content: flex-end;\n      }\n\n      .open-mark {\n        background: var(--black);\n        width: 125px;\n        height: 175px;\n        border-radius: 15px;\n        transform: translate(100px, 75px) rotate(-35deg);\n      }\n\n      .text {\n        display: flex;\n        flex-direction: column;\n        line-height: 410%;\n        transform: rotate(-35deg) translate(-100px, 225px);\n      }\n\n      .brand {\n        padding-top: 40px;\n        font-size: 100px;\n        color: var(--red);\n        font-weight: 600;\n        letter-spacing: 4px;\n      }\n\n      .subtitle {\n        font-size: 38px;\n        text-align: left;\n      }\n\n      .model {\n        font-size: 72px;\n        text-align: center;\n        line-height: 40%;\n        transform: translateX(-20px);\n      }\n    '}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`\n      <style>${this.styles}</style>\n      <div class="box">\n        <div class="cover">\n          <div class="text">\n            <span class="brand">Kodak</span>\n            <span class="subtitle">VideoCassette</span>\n            <span class="model">E-180</span>\n          </div>\n          <div class="center">\n            <div class="open-mark"></div>\n          </div>\n        </div>\n        <div class="body">\n          <span class="logo">VHS</span>\n          <span class="duration">180 min. (258 metres) of video recording and playback.</span>\n        </div>\n      </div>\n    `}}customElements.define("kodak-box",s);const a=["vhs","kodak"];let r=0;const l=document.querySelector(".container");document.body.onclick=()=>{r=(r+1)%a.length;const n=a[r];l.innerHTML=`\n    <${n}-box></${n}-box>\n    <vhs-cassette model="${n}"></vhs-cassette>\n  `};