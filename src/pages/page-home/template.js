const template = html => html`
  <header class="banner">
    <div class="banner-text">
      <h1 class="h1">
        The Grandest Technology
        Conference in the Philippines
      </h1>
      <banner-link href="https://goo.gl/maps/keP2hABL8KM2" main="Century Park Hotel Manila" sub="Malate, Manila, Metro Manila">
        <svg viewBox="0 0 24 24">
          <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
        </svg>
      </banner-link>
      <banner-link href="https://calendar.google.com/calendar/r/eventedit?text=DevFest+Philippines+2018&dates=20181013T000000Z/20181013T100000Z&details=For+details,+link+here:+https://www.eventbrite.com/e/devfest-philippines-2018-tickets-49635185175&location=Century+Park+Hotel+Manila+-+599+Ocampo+Street+-+Manila+1004+-+Philippines&sf=true" main="October 13, 2018" sub="8:00am to 5:00pm">
        <svg viewBox="0 0 24 24">
          <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
        </svg>
      </banner-link>
      <div class="banner-buttons">
        <a href="https://www.eventbrite.com/e/devfest-philippines-2018-tickets-49635185175" target="_blank" rel="noopener" class="button-outline">
          <svg class="button-icon" viewBox="0 0 24 24">
            <path d="M4,4A2,2 0 0,0 2,6V10A2,2 0 0,1 4,12A2,2 0 0,1 2,14V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V14A2,2 0 0,1 20,12A2,2 0 0,1 22,10V6A2,2 0 0,0 20,4H4M4,6H20V8.54C18.76,9.25 18,10.57 18,12C18,13.43 18.76,14.75 20,15.46V18H4V15.46C5.24,14.75 6,13.43 6,12C6,10.57 5.24,9.25 4,8.54V6Z" />
          </svg>
          BUY TICKET
        </a>
      </div>
    </div>
    <div class="banner-gradient-container"></div>
    <div class="banner-image-container">
      <lazy-picture
        class="banner-image"
        cover
        src="/assets/images/banner/mobile.jpg"
        thumbnail="/assets/images/banner/thumbnail.jpg"
        alt="GDG Devfest 2018 Banner Picture">
        <source srcset="/assets/images/banner/desktop.jpg" media="(min-width: 1280px)">
        <source srcset="/assets/images/banner/small-desktop.jpg" media="(min-width: 1024px)">
        <source srcset="/assets/images/banner/tablet.jpg" media="(min-width: 800px)">
      </lazy-picture>
    </div>
  </header>
`;

export { template };
