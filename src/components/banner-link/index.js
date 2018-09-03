import { TemplateLite } from '@littleq/element-lite/template-lite.js';
import { render, html } from 'lit-html';
import { template } from './template.js';
import style from './style.styl';
const { HTMLElement, customElements } = window;

class Component extends TemplateLite(HTMLElement) {
  static get is () { return 'banner-link'; }

  static get renderer () { return render; }

  static get observedAttributes () {
    return ['href', 'main', 'sub'];
  }

  set href (href) {
    this._href = href;
    this.requestRender();
  }

  get href () {
    return this._href;
  }

  set main (main) {
    this._main = main;
    this.requestRender();
  }

  get main () {
    return this._main;
  }

  set sub (sub) {
    this._sub = sub;
    this.requestRender();
  }

  get sub () {
    return this._sub;
  }

  template () {
    return html`<style>${style.toString()}</style>${template(html, this)}`;
  }

  attributeChangedCallback (attr, oldValue, newValue) {
    if (oldValue !== newValue) this[attr] = newValue;
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
