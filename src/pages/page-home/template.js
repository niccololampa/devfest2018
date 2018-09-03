const template = html => html`
  <lazy-picture class="banner" cover src="/assets/images/banner/mobile.jpg">
    <source srcset="/assets/images/banner/desktop.jpg" media="(min-width: 1280px)">
  </lazy-picture>
`;

export { template };
