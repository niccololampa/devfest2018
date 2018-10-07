import { databaseGet } from '../../utils/firebase';
import { setItem, getItem } from '../../utils/local-storage';
const { HTMLElement, customElements } = window;
const localForageName = 'sponsor-list';

class Component extends HTMLElement {
  static get is () { return 'sponsor-list-wrapper'; }

  set typeId (typeId) {
    this._typeId = typeId;
    this.load(typeId);
  }

  get typeId () {
    return this._typeId;
  }

  async load (typeId) {
    const el = this.firstElementChild;
    if (typeId) {
      el.sponsors = await getItem(`${localForageName}-${typeId}`) || [];
      const data = await databaseGet('main', {
        path: `events/devfest2018/sponsors/lists/types/${typeId}`
      });
      const sponsors = [];
      for (let $key in data) {
        sponsors.push($key);
      }
      el.sponsors = sponsors;
      await setItem(`${localForageName}-${typeId}`, sponsors);
    }

  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
