import { TemplateLite } from '@littleq/element-lite/template-lite.js';
import { readDatabaseOnce } from '../../utils/firebase';
const { HTMLElement, customElements } = window;

class Component extends TemplateLite(HTMLElement) {
  static get is () { return 'speaker-list-loader'; }

  template () {
    return '<slot></slot>';
  }

  connectedCallback () {
    if (super.connectedCallback) super.connectedCallback();
    this.load();
  }

  async load () {
    const el = this.querySelector('speaker-list');
    const data = await readDatabaseOnce('main', { path: 'events/devfest2018/speakers/lists/summary' });
    const speakers = [];
    for (let $key in data) {
      speakers.push({
        $key,
        ...data[$key]
      });
    }
    el.speakers = speakers;
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
