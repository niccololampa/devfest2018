import { databaseGet } from '../../utils/firebase';
import { setItem, getItem } from '../../utils/local-storage';
const { HTMLElement, customElements } = window;
const localForageName = 'sponsor-type-list';

class Component extends HTMLElement {
  static get is () { return 'sponsor-type-list-wrapper'; }

  connectedCallback () {
    this.load();
  }

  async load () {
    const el = this.firstElementChild;

    el.types = await getItem(`${localForageName}`) || [];
    const data = await databaseGet('main', {
      path: `events/devfest2018/sponsor-types/lists/types/`
    });
    const types = [];
    for (let $key in data) {
      types.push({
        $key,
        order: data[$key]
      });
    }
    types.sort((i, j) => parseInt(i.order, 10) - parseInt(j.order, 10));
    el.types = types;
    await setItem(`${localForageName}`, types);
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
