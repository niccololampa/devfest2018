import { databaseGet } from '../../utils/firebase';
import { setItem, getItem } from '../../utils/local-storage';
const { HTMLElement, customElements } = window;
const localForageName = 'schedule-session-item';

class Component extends HTMLElement {
  static get is () { return 'schedule-session-wrapper'; }

  set sessionId (sessionId) {
    this._sessionId = sessionId;
    this.load(sessionId);
  }

  get sessionId () {
    return this._sessionId;
  }

  async load (sessionId) {
    const el = this.firstElementChild;
    if (sessionId) {
      el.days = await getItem(`${localForageName}-${sessionId}`) || {};
      const data = await databaseGet('main', {
        path: `events/devfest2018/schedule/data/sessions/${sessionId}`
      });

      el.session = { $key: sessionId, ...data };
      await setItem(`${localForageName}-${sessionId}`, el.session);
    }
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
