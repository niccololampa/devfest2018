const template = (html, self) => function () {
  const { href, main, sub } = this;
  return html`
    <a href="${href}" target="_blank" rel="noopener" class="banner-anchor">
      <div class="icon-container">
        <slot></slot>
      </div>
      <div class="link-text">
        <span class="main-text">
          ${main}
        </span>
        <span class="sub-text">
          ${sub}
        </span>
      </div>
    </a>
  `;
}.bind(self)();

export { template };
