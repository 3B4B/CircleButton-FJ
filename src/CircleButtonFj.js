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
      counter: { type: Number },
      //remove counter
      //add link
      //add icon
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
    //update with text, icon, and link
  }

  //Remove this vvvv
  __increment() {
    this.counter += 1;
  }
  //Add onclick function


// <a> tag wrapping a span
  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
