import { TemplateLite } from '@littleq/element-lite/template-lite.js';
import { readDatabaseOnce } from '../../utils/firebase';
import { setItem, getItem } from '../../utils/local-storage';
import { subscribe, unsubscribe } from '../../utils/state';
const { HTMLElement, customElements } = window;

class Component extends TemplateLite(HTMLElement) {
  static get is () { return 'speaker-loader'; }

  template () {
    return '<slot></slot>';
  }

  constructor () {
    super();
    this._boundSaveImg = this._saveImg.bind(this);
    this._boundSaveThumbnail = this._saveThumbnail.bind(this);
    this._boundLoad = this.load.bind(this);
  }

  connectedCallback () {
    if (super.connectedCallback) super.connectedCallback();
    subscribe('routeParamObject', this._boundLoad);
  }

  disconnectedCallback () {
    if (super.disconnectedCallback) super.disconnectedCallback();
    unsubscribe('routeParamObject', this._boundLoad);
  }

  async load ({ speakerId }) {
    const el = this.firstElementChild;
    el.speaker = await getItem(`speaker-${speakerId}`) || [];
    el.addEventListener('save-image', this._boundSaveImg);
    el.addEventListener('save-thumbnail', this._boundSaveThumbnail);
    const speaker = await readDatabaseOnce('main', {
      path: `events/devfest2018/speakers/data/${speakerId}`
    });
    el.speaker = { $key: speakerId, ...speaker };
    await setItem(`speaker-${speakerId}`, speaker);
  }

  _saveImg ({ target: el, detail: img }) {
    if (img) {
      el.speaker.img = img;
      setItem(`speaker-${el.speaker.$key}`, el.speaker);
    }
  }

  _saveThumbnail ({ target: el, detail: thumbnail }) {
    if (thumbnail) {
      el.speaker.thumbnail = thumbnail;
      setItem(`speaker-${el.speaker.$key}`, el.speaker);
    }
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
