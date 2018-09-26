import { TemplateLite } from '@littleq/element-lite/template-lite.js';
import { PropertiesLite } from '@littleq/element-lite/properties-lite.js';
import { render, html } from 'lit-html';
import { template } from './template.js';
import style from './style.styl';
import '../../smart-components/storage-url-loader/index.js';
const { HTMLElement, customElements } = window;

class Component extends TemplateLite(PropertiesLite(HTMLElement)) {
  static get is () { return 'speaker-summary-item'; }

  static get renderer () { return render; }

  static get properties () {
    return {
      speaker: {
        type: Object,
        value: {}
      },
      img: {
        type: String,
        value: '',
        notify: true
      },
      thumbnail: {
        type: String,
        value: '',
        notify: true
      }
    };
  }

  template () {
    return html`<style>${style.toString()}</style>${template(html, this)}`;
  }

  _updateImg ({ detail: img }) {
    this.img = img;
  }

  _updateThumbnail ({ detail: img }) {
    this.thumbnail = img;
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
