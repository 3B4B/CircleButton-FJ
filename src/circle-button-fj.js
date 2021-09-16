import { html, css, LitElement } from 'lit';

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
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      link: {type: String}
      //add icon
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.link = "https://www.psu.edu";
    //update icon
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
      <a href=${this.link}>
        <span>${this.title}</span>
      </a>
    `;
  }
}
