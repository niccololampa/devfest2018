import { TemplateLite } from '@littleq/element-lite/template-lite.js';
import { render, html } from 'lit-html';
import { template } from './template.js';
import style from './style.styl';
const { HTMLElement, customElements } = window;

class Component extends TemplateLite(HTMLElement) {
  static get is () { return 'stat-item'; }

  static get renderer () { return render; }

  static get properties () {
    return {
      number: {
        type: String,
        value: 'default',
        reflectToAttribute: true
      },
      detail: {
        type: String,
        value: 'default',
        reflectToAttribute: true
      }
    }
  }

  template () {
    return html`<style>${style.toString()}</style>
    <div class="cell">
  <svg style="width:5rem;height:5rem" viewBox="0 0 24 24">
    <path fill="#ffffff" d="M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15 17,16.5V19H23V16.5C23,14.17 18.33,13 16,13M8,13C5.67,13 1,14.17 1,16.5V19H15V16.5C15,14.17 10.33,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z" />
  </svg>
  <span>
    <span class="number">538</span><br>
    <span class="detail">Attendees</span>
  </span>
</div>
    `;
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
