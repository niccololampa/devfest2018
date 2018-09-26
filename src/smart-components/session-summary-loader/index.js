import { TemplateLite } from '@littleq/element-lite/template-lite.js';
import { ObserversLite } from '@littleq/element-lite/observers-lite.js';
import { readDatabaseOnce } from '../../utils/firebase';
import { setItem, getItem } from '../../utils/local-storage';
const { HTMLElement, customElements } = window;

class Component extends TemplateLite(ObserversLite(HTMLElement)) {
  static get is () { return 'session-summary-loader'; }

  static get properties () {
    return {
      sessionId: {
        type: String,
        observer: 'load'
      }
    };
  }

  template () {
    return '<slot></slot>';
  }

  async load (sessionId) {
    const el = this.firstElementChild;
    el.session = await getItem(`session-summary-${sessionId}`) || {};

    const session = await readDatabaseOnce('main', {
      path: `events/devfest2018/sessions/lists/summary/${sessionId}`
    }) || {};

    el.session = { $key: sessionId, ...session };
    await setItem(`speaker-${sessionId}`, session);
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
