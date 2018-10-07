import { databaseGet } from '../../utils/firebase';
import { setItem, getItem } from '../../utils/local-storage';
const { HTMLElement, customElements } = window;
const localForageName = 'sponsor-type';

class Component extends HTMLElement {
  static get is () { return 'sponsor-type-wrapper'; }

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
      el.type = await getItem(`${localForageName}-${typeId}`) || {};
      const data = await databaseGet('main', {
        path: `events/devfest2018/sponsor-types/data/${typeId}`
      });

      el.type = { $key: typeId, ...data };
      await setItem(`${localForageName}-${typeId}`, el.type);
    }
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
