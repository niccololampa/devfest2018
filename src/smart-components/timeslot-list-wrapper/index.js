import { databaseGet } from '../../utils/firebase';
import { setItem, getItem } from '../../utils/local-storage';
const { HTMLElement, customElements } = window;
const localForageName = 'timeslot-list';

class Component extends HTMLElement {
  static get is () { return 'timeslot-list-wrapper'; }

  set dayId (dayId) {
    this._dayId = dayId;
    this.load(dayId);
  }

  get dayId () {
    return this._dayId;
  }

  async load (dayId) {
    const el = this.firstElementChild;
    if (dayId) {
      el.days = await getItem(`${localForageName}-${dayId}`) || [];
      const data = await databaseGet('main', {
        path: `events/devfest2018/schedule/lists/days/${dayId}`
      });
      const timeslots = [];
      for (let $key in data) {
        timeslots.push({
          $key,
          startTime: data[$key]
        });
      }
      timeslots.sort((i, j) => parseInt(i.startTime, 10) - parseInt(j.startTime, 10));
      el.timeslots = timeslots;
      await setItem(`${localForageName}-${dayId}`, timeslots);
    }
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
