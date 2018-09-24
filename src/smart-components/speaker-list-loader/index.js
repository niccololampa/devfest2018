import { TemplateLite } from '@littleq/element-lite/template-lite.js';
const { HTMLElement, customElements } = window;

class Component extends TemplateLite(HTMLElement) {
  static get is () { return 'speaker-list-loader'; }

  template () {
    return '<slot></slot>';
  }

  connectedCallback () {
    if (super.connectedCallback) super.connectedCallback();
    this.load();
  }

  async load () {
    // use firebase in a bit

    const el = this.querySelector('speaker-list');
    el.speakers = [
      {
        $key: '',
        img: 'https://developers.google.com/experts/img/user/106755551521071658037.png',
        affiliation: 'University of the Philippines Los Banos',
        location: 'Philippines'
      },
      {
        $key: '',
        img: 'https://developers.google.com/experts/img/user/106755551521071658037.png',
        affiliation: 'University of the Philippines Los Banos',
        location: 'Philippines'
      },
      {
        $key: '',
        img: 'https://developers.google.com/experts/img/user/106755551521071658037.png',
        affiliation: 'University of the Philippines Los Banos',
        location: 'Philippines'
      },
      {
        $key: '',
        img: 'https://developers.google.com/experts/img/user/106755551521071658037.png',
        affiliation: 'University of the Philippines Los Banos',
        location: 'Philippines'
      }
    ];
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
