const template = html => html`
  <header class="banner">
    <div class="banner-gradient-container"></div>
    <div class="banner-image-container">
      <lazy-picture class="banner-image" cover src="/assets/images/banner/mobile.jpg" alt="GDG Devfest 2018 Banner Picture">
        <source srcset="/assets/images/banner/desktop.jpg" media="(min-width: 1280px)">
        <source srcset="/assets/images/banner/small-desktop.jpg" media="(min-width: 1024px)">
        <source srcset="/assets/images/banner/tablet.jpg" media="(min-width: 800px)">
      </lazy-picture>
    </div>
  </header>
`;

export { template };
