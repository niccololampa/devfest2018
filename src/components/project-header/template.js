const template = (html, self) => function () {
  const { openSidebar, buy } = this;
  return html`
    <header class="header">
      <button class="icon-button show-on-mobile-only" @click=${openSidebar} aria-label="Open Sidebar">
        <svg class="icon" viewBox="0 0 24 24">
          <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>
      </button>
      <h1 class="title">
        <a href="/">
          <lazy-picture class="logo" src="/assets/images/devfest-logo.png" alt="GDG Devfest 2018 Home">
          </lazy-picture>
        </a>
      </h1>
      <navigation-wrapper>
        <header-navigation class="hide-on-mobile">
        </header-navigation>
      </navigation-wrapper>
      <a href="https://www.eventbrite.com/e/devfest-philippines-2018-tickets-49635185175" target="_blank" rel="noopener" class="button hide-on-mobile" @click="${buy.bind(this)}">
        <svg class="button-icon" viewBox="0 0 24 24">
          <path d="M4,4A2,2 0 0,0 2,6V10A2,2 0 0,1 4,12A2,2 0 0,1 2,14V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V14A2,2 0 0,1 20,12A2,2 0 0,1 22,10V6A2,2 0 0,0 20,4H4M4,6H20V8.54C18.76,9.25 18,10.57 18,12C18,13.43 18.76,14.75 20,15.46V18H4V15.46C5.24,14.75 6,13.43 6,12C6,10.57 5.24,9.25 4,8.54V6Z" />
        </svg>
        BUY TICKET
      </a>
    </header>
  `;
}.bind(self)();

export { template };
