import { databaseGet } from '../../utils/firebase';
import { setItem, getItem } from '../../utils/local-storage';
const { HTMLElement, customElements } = window;
const localForageName = 'sponsor';

class Component extends HTMLElement {
  static get is () { return 'sponsor-wrapper'; }

  set sponsorId (sponsorId) {
    this._sponsorId = sponsorId;
    this.load(sponsorId);
  }

  get sponsorId () {
    return this._sponsorId;
  }

  async load (sponsorId) {
    const el = this.firstElementChild;
    if (sponsorId) {
      el.sponsor = await getItem(`${localForageName}-${sponsorId}`) || {};
      const data = await databaseGet('main', {
        path: `events/devfest2018/sponsors/data/${sponsorId}`
      });

      el.type = { $key: sponsorId, ...data };
      await setItem(`${localForageName}-${sponsorId}`, el.type);
    }
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
