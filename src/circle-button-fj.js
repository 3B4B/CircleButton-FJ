import { html, css, LitElement } from 'lit';
import "@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

export class CircleButtonFj extends LitElement {
  
  //Update so button is somehow a circle
  //Colors
  //CSS Vars
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--circle-button-fj-text-color, #000);
      }

      :host([dark-mode]) {

      }

      :host([high-contrast]) {
        
      }

      a {
        background-color:#44c767;
        border-radius:28px;
        border:1px solid #18ab29;
        display:inline-block;
        cursor:pointer;
        color:#ffffff;
        font-family:Times New Roman;
        font-size:17px;
        font-weight:bold;
        padding:16px 31px;
        text-decoration:none;
      }
      a:hover {
        background-color:#5cbf2a;
      }
      a:active {
        position:relative;
        top:1px;
      }

      
    `;
  }

  static get properties() {
    return {
      title: {type: String},
      link: {type: String},
      icon: {type: String}
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.link = "https://www.psu.edu";
    this.icon = "save"
  }

  //Add onclick function
  __clickButton(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
  }

// <a> tag wrapping a span
  render() {
    return html`
      <a href=${this.link} tabindex="-1" rel="noopener">
        <button><simple-icon-lite icon=${this.icon}></simple-icon-lite>${this.title}</button>
      </a>
    `;
  }
}
