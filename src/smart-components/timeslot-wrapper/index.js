import { databaseGet } from '../../utils/firebase';
import { setItem, getItem } from '../../utils/local-storage';
const { HTMLElement, customElements } = window;
const localForageName = 'timeslot';

class Component extends HTMLElement {
  static get is () { return 'timeslot-wrapper'; }

  set timeslotId (timeslotId) {
    this._timeslotId = timeslotId;
    this.load(timeslotId);
  }

  get timeslotId () {
    return this._timeslotId;
  }

  async load (id) {
    const el = this.firstElementChild;
    if (id) {
      el.days = await getItem(`${localForageName}-${id}`) || {};
      const data = await databaseGet('main', {
        path: `events/devfest2018/schedule/data/timeslots/${id}`
      });
      el.timeslot = { $key: id, ...data };
      await setItem(`${localForageName}-${id}`, el.timeslot);
    }
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
