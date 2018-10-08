import { TemplateLite } from '@littleq/element-lite/template-lite.js';
import { render, html } from 'lit-html';
import { template } from './template.js';
import style from './style.styl';
import '../../smart-components/navigation-wrapper/index.js';
import '../../components/header-navigation/index.js';
import '../../components/lazy-picture/index.js';
const { HTMLElement, customElements } = window;

class Component extends TemplateLite(HTMLElement) {
  static get is () { return 'project-header'; }

  static get renderer () { return render; }

  template () {
    return html`<style>${style.toString()}</style>${template(html, this)}`;
  }

  async openSidebar () {
    await import('../project-sidebar/index.js');
    const sidebar = document.querySelector('project-sidebar');
    setTimeout(() => sidebar.open(), 50);
  }

  async closeSidebar () {
    await import('../project-sidebar/index.js');
    const sidebar = document.querySelector('project-sidebar');
    sidebar.close();
  }

  buy ({ target }) {
    if (window.gtag) {
      window.gtag('event', 'click', {
        'event_category': 'buy_ticket',
        'event_label': target.href,
        'transport_type': 'beacon'
      });
    }
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
