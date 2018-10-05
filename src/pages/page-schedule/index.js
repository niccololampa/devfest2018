import { TemplateLite } from '@littleq/element-lite/template-lite.js';
import { render, html } from 'lit-html';
import { template } from './template.js';
import style from './style.styl';
import '../../components/schedule-section/index.js';
import '../../components/schedule-list/index.js';
import '../../smart-components/schedule-wrapper/index.js';
import '../../components/footer-section/index.js';
const { HTMLElement, customElements } = window;

class Page extends TemplateLite(HTMLElement) {
  static get is () { return 'page-speaker'; }

  static get renderer () { return render; }

  template () {
    return html`<style>${style.toString()}</style>${template(html, this)}`;
  }
}

if (!customElements.get(Page.is)) {
  customElements.define(Page.is, Page);
} else {
  console.warn(`${Page.is} is already defined somewhere. Please check your code.`);
}
