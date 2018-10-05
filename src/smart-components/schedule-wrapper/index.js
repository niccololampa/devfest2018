import { TemplateLite } from '@littleq/element-lite/template-lite.js';
import { databaseGet } from '../../utils/firebase';
import { setItem, getItem } from '../../utils/local-storage';
const { HTMLElement, customElements } = window;
const scheduleList = 'schedule-list';

class Component extends TemplateLite(HTMLElement) {
  static get is () { return 'schedule-wrapper'; }

  template () {
    return '<slot></slot>';
  }

  connectedCallback () {
    if (super.connectedCallback) super.connectedCallback();
    this.load();
  }

  async load () {
    const el = this.firstElementChild;
    el.days = await getItem(scheduleList) || [];
    const data = await databaseGet('main', {
      path: 'events/devfest2018/schedule/data/days'
    });
    const days = [];
    for (let $key in data) {
      days.push({
        $key,
        ...data[$key]
      });
    }
    el.days = days;
    await setItem(scheduleList, days);
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
