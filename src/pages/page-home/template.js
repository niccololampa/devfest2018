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

  <section class="section overflow-top card white expect">
    <h1 class="h1">
      What to expect?
    </h1>

    <div class="grid">
      <div class="cell">
        <div class="icon-container">
          <svg class="icon" viewBox="0 0 24 24">
            <path d="M17,12V3A1,1 0 0,0 16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z" />
          </svg>
        </div>
        <h2 class="h2">
          Seamless Conference
        </h2>
        <p class="paragraph">
          With a dedicated team assigned to develop applications that will digitized conference related activities (registration, acquisition of stubs, feedback forms) and improved gamified codelab apps.
        </p>
      </div>

      <div class="cell">
        <div class="icon-container">
          <svg class="icon" viewBox="0 0 24 24">
            <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z" />
          </svg>
        </div>
        <h2 class="h2">
          Technical Talks and Workshops
        </h2>
        <p class="paragraph">
          The conference will feature talks from distinguished invited speakers who will be sharing the latest in the fields of Mobile, Web, and Cloud Technologies.
        </p>
      </div>

      <div class="cell">
        <div class="icon-container">
          <svg class="icon" viewBox="0 0 24 24">
            <path d="M12,18H6V14H12M21,14V12L20,7H4L3,12V14H4V20H14V14H18V20H20V14M20,4H4V6H20V4Z" />
          </svg>
        </div>
        <h2 class="h2">
          Demo booth and Exhibit
        </h2>
        <p class="paragraph">
          Booths will be in place to showcase devices that will let participants get a hands-on experience of the latest google technologies.
        </p>
      </div>

      <div class="cell">
        <div class="icon-container">
          <svg class="icon" viewBox="0 0 24 24">
            <path d="M12,6A3,3 0 0,0 9,9A3,3 0 0,0 12,12A3,3 0 0,0 15,9A3,3 0 0,0 12,6M6,8.17A2.5,2.5 0 0,0 3.5,10.67A2.5,2.5 0 0,0 6,13.17C6.88,13.17 7.65,12.71 8.09,12.03C7.42,11.18 7,10.15 7,9C7,8.8 7,8.6 7.04,8.4C6.72,8.25 6.37,8.17 6,8.17M18,8.17C17.63,8.17 17.28,8.25 16.96,8.4C17,8.6 17,8.8 17,9C17,10.15 16.58,11.18 15.91,12.03C16.35,12.71 17.12,13.17 18,13.17A2.5,2.5 0 0,0 20.5,10.67A2.5,2.5 0 0,0 18,8.17M12,14C10,14 6,15 6,17V19H18V17C18,15 14,14 12,14M4.67,14.97C3,15.26 1,16.04 1,17.33V19H4V17C4,16.22 4.29,15.53 4.67,14.97M19.33,14.97C19.71,15.53 20,16.22 20,17V19H23V17.33C23,16.04 21,15.26 19.33,14.97Z" />
          </svg>
        </div>
        <h2 class="h2">
          Party and Networking
        </h2>
        <p class="paragraph">
          Participants will have the chance to indulge themselves with an after event gathering and celebration. Through this, they can experience great conversations and have the chance to increase their network.
        </p>
      </div>
    </div>
  </section>
`;

export { template };
