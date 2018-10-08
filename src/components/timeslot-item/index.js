import { TemplateLite } from '@littleq/element-lite/template-lite.js';
import { PropertiesLite } from '@littleq/element-lite/properties-lite.js';
import { render, html } from 'lit-html';
import { template } from './template.js';
import style from './style.styl';
import '../schedule-session-list/index.js';
import '../../smart-components/schedule-session-list-wrapper/index.js';
const { HTMLElement, customElements } = window;

class Component extends TemplateLite(PropertiesLite(HTMLElement)) {
  static get is () { return 'timeslot-item'; }

  static get renderer () { return render; } // TemplateLite

  static get properties () { // PropertiesLite
    return {
      timeslot: {
        type: Object,
        value: {}
      }
    };
  }

  template () {
    return html`<style>${style.toString()}</style>${template(html, this)}`; // TemplateLite
  }

  timeString (time) {
    if (time) {
      const hrmin = parseInt(time, 10);
      const hr = parseInt(hrmin / 100, 10);
      const min = hrmin % 60;
      const apm = hr >= 12 ? 'pm' : 'am';
      const halfHr = hr > 12 ? hr - 12 : hr;
      const trueMin = min < 10 ? `0${min}` : min;
      return `${halfHr}:${trueMin} ${apm}`;
    }
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
