import { TemplateLite } from '@littleq/element-lite/template-lite.js';
import { ObserversLite } from '@littleq/element-lite/observers-lite.js';
import { readDatabaseOnce } from '../../utils/firebase';
import { setItem, getItem } from '../../utils/local-storage';
const { HTMLElement, customElements } = window;

class Component extends TemplateLite(ObserversLite(HTMLElement)) {
  static get is () { return 'speaker-summary-wrapper'; }

  static get properties () {
    return {
      speakerId: {
        type: String,
        observer: 'load'
      }
    };
  }

  template () {
    return '<slot></slot>';
  }

  async load (speakerId) {
    const el = this.firstElementChild;
    el.speaker = await getItem(`speaker-summary-${speakerId}`) || {};

    const speaker = await readDatabaseOnce('main', {
      path: `events/devfest2018/speakers/lists/summary/${speakerId}`
    }) || {};

    el.speaker = { $key: speakerId, ...speaker };
    await setItem(`speaker-${speakerId}`, speaker);
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
