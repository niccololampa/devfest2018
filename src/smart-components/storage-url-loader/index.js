import { readStorageURL } from '../../utils/firebase';
import { CheckFirebaseReadyMixin } from '../../mixins/check-firebase-ready.js';
const { HTMLElement, customElements, CustomEvent } = window;

class Component extends CheckFirebaseReadyMixin(HTMLElement) {
  static get is () { return 'storage-url-loader'; }

  static get observedAttributes () {
    return ['path'];
  }

  set path (path) {
    this._path = path;
    if (path) {
      this.readStorageURL(path);
    }
  }

  get path () {
    return this._path;
  }

  set url (url) {
    this._url = url;
    this.dispatchEvent(new CustomEvent('url-changed', { detail: url }));
  }

  get url () {
    return this._url;
  }

  _whenFirebaseReady () {
    if (this.path) {
      this.readStorageURL(this.path);
    }
  }

  async readStorageURL (path) {
    this.url = await readStorageURL(path);
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;
    }
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
