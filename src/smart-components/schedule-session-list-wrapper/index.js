import { databaseGet } from '../../utils/firebase';
import { setItem, getItem } from '../../utils/local-storage';
const { HTMLElement, customElements } = window;
const localForageName = 'schedule-session-for-timeslot-list';

class Component extends HTMLElement {
  static get is () { return 'schedule-session-list-wrapper'; }

  set timeslotId (timeslotId) {
    this._timeslotId = timeslotId;
    this.load(timeslotId);
  }

  get timeslotId () {
    return this._timeslotId;
  }

  async load (timeslotId) {
    const el = this.firstElementChild;
    if (timeslotId) {
      el.days = await getItem(`${localForageName}-${timeslotId}`) || [];
      const data = await databaseGet('main', {
        path: `events/devfest2018/schedule/lists/timeslots/${timeslotId}`
      });
      const sessions = [];
      for (let $key in data) {
        sessions.push($key);
      }
      el.sessions = sessions;
      await setItem(`${localForageName}-${timeslotId}`, sessions);
    }
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
