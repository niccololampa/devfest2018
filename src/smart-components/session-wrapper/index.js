import { TemplateLite } from '@littleq/element-lite/template-lite.js';
import { readDatabaseOnce } from '../../utils/firebase';
import { setItem, getItem } from '../../utils/local-storage';
import { subscribe, unsubscribe } from '../../utils/state';
const { HTMLElement, customElements } = window;

class Component extends TemplateLite(HTMLElement) {
  static get is () { return 'session-wrapper'; }

  template () {
    return '<slot></slot>';
  }

  constructor () {
    super();
    this._boundLoad = this.load.bind(this);
  }

  connectedCallback () {
    if (super.connectedCallback) super.connectedCallback();
    subscribe('routeParamObject', this._boundLoad);
  }

  disconnectedCallback () {
    if (super.disconnectedCallback) super.disconnectedCallback();
    unsubscribe('routeParamObject', this._boundLoad);
  }

  async load ({ sessionId }) {
    const el = this.firstElementChild;
    el.session = await getItem(`session-${sessionId}`) || {};
    const session = await readDatabaseOnce('main', {
      path: `events/devfest2018/sessions/data/${sessionId}`
    }) || {};
    el.session = { $key: sessionId, ...session };
    await setItem(`session-${sessionId}`, session);
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
