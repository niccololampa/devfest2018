import { TemplateLite } from '@littleq/element-lite/template-lite.js';
import { databaseGet } from '../../utils/firebase';
import { setItem, getItem } from '../../utils/local-storage';
const { HTMLElement, customElements } = window;
const summaryList = 'speaker-summary-list';

class Component extends TemplateLite(HTMLElement) {
  static get is () { return 'speaker-list-wrapper'; }

  template () {
    return '<slot></slot>';
  }

  constructor () {
    super();
    this._boundSaveImg = this._saveImg.bind(this);
    this._boundSaveThumbnail = this._saveThumbnail.bind(this);
  }

  connectedCallback () {
    if (super.connectedCallback) super.connectedCallback();
    this.load();
  }

  async load () {
    const el = this.firstElementChild;
    el.speakers = await getItem(summaryList) || [];
    el.addEventListener('save-image', this._boundSaveImg);
    el.addEventListener('save-thumbnail', this._boundSaveThumbnail);
    const data = await databaseGet('main', {
      path: 'events/devfest2018/speakers/lists/summary'
    });
    const speakers = [];
    for (let $key in data) {
      const index = el.speakers.findIndex(speaker => speaker.$key === $key);
      speakers.push({
        $key,
        img: index >= 0 ? el.speakers[index].img : null,
        thumbnail: index >= 0 ? el.speakers[index].thumbnail : null,
        ...data[$key]
      });
    }
    el.speakers = speakers;
    await setItem(summaryList, speakers);
  }

  _saveImg ({ target: el, detail: { img, $key } }) {
    const index = el.speakers.findIndex(speaker => speaker.$key === $key);
    if (img) {
      el.speakers[index].img = img;
      setItem(summaryList, el.speakers);
    }
  }

  _saveThumbnail ({ target: el, detail: { thumbnail, $key } }) {
    const index = el.speakers.findIndex(speaker => speaker.$key === $key);
    if (thumbnail) {
      el.speakers[index].thumbnail = thumbnail;
      setItem(summaryList, el.speakers);
    }
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
