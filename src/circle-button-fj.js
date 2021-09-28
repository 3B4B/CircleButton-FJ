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
        border-radius: 30%; 
        
      }

      :host([high-contrast]) {
        
      }

      a[dark-mode]{
        background-color: #000000;
        border-radius: 100%; 
        border:2px solid #FFFFFF;
      
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

        display:inline-block;
        cursor:pointer;

        color:#ffffff;
        
        text-decoration:none;
        
        
        height: 70px; 
        width: 70px; 

      }

      a {
        background-color: #FFFFFF;
        border-radius: 100%; 
        border:2px solid #000000;
      
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

        display:inline-block;
        cursor:pointer;

        color:#ffffff;
        
        text-decoration:none;
        
        
        height: 70px; 
        width: 70px; 


      }
      a:hover {
        background-color: #e0e0e0;
        border: 4px solid #e0e0e0;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        font-weight:bold;
      }
      a:active {
        background-color: #e0e0e0;
        border: 6px solid #e0e0e0;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        font-weight:bold;

      }       
      button {
        border: none; 
        background-color: transparent;
        font-family: "Courier New", monospace;
        font-size: small; 

        

      }
      span {
        font-family: "Andale Mono", monospace; 
        font-weight: 1000;
        font-size: large;  
      
      }
      
    `;
  }

  static get properties() {
    return {
      title: {type: String},
      link: {type: String},
      icon: {type: String},
      diabled: {type: Boolean, reflect: true},
      description: {type: String}, 
      contrast: {type: Boolean, reflect: true}, 
      darkMode: {type: Boolean, reflect: true},
    };
  }

  constructor() {
    super();
    this.title = 'Yes';
    this.description = 'Take me there'
    this.link = "https://www.psu.edu";
    this.icon = null;
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
        <button>
          ${this.icon ? html `<simple-icon-lite icon=${this.icon}></simple-icon-lite>`: ``}
          <br>
          <span>${this.title}</span> 
          <br>
          ${this.description}
        </button>
      </a>
    `;
  }
}
