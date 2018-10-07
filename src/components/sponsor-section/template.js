const template = (html) => html`
  <section class="sponsor-section limit-width white center">
    <h1 class="h1 section-title">
      Thank you to our Sponsors
    </h1>

    <p class="paragraph tiny-limit-width">
      Interested in becoming a Devfest Philippines sponsor? Contact us at
      <a href="mailto:gdgphmarketing@gmail.com">gdgphmarketing@gmail.com</a>
      to discuss opportunities to be showcased throughout the event in Manila.
    </p>

    <slot></slot>

    <!--
      <div class="sponsor">
        <a href="https://google.com" class="sponsor-link" target="_blank" rel="noopener" title="Google">
          <lazy-picture src="/assets/images/sponsors/google.jpg" class="sponsor-image" alt="Google"></lazy-picture>
        </a>
      </div> -->

  </section>
`;

export { template };
