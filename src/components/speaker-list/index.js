import { TemplateLite } from '@littleq/element-lite/template-lite.js';
import { PropertiesLite } from '@littleq/element-lite/properties-lite.js';
import { render, html } from 'lit-html';
import { template } from './template.js';
import style from './style.styl';
import '../speaker-summary-item/index.js';
const { HTMLElement, customElements, CustomEvent } = window;

class Component extends TemplateLite(PropertiesLite(HTMLElement)) {
  static get is () { return 'speaker-list'; }

  static get renderer () { return render; } // TemplateLite

  static get properties () { // PropertiesLite
    return {
      speakers: {
        type: Array,
        value: []
      }
    };
  }

  template () {
    return html`<style>${style.toString()}</style>${template(html, this)}`; // TemplateLite
  }

  _saveImg ({ target: el, detail: img }) {
    this.dispatchEvent(new CustomEvent('save-image', { detail: { img, $key: el.speaker.$key } }));
  }

  _saveThumbnail ({ target: el, detail: thumbnail }) {
    this.dispatchEvent(new CustomEvent('save-thumbnail', { detail: { thumbnail, $key: el.speaker.$key } }));
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
