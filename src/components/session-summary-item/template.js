const template = (html, self) => function () {
  const { session } = this;
  const { $key, title } = session;
  return html`
    <div class="bar"></div>
    <h2 class="h2">
      <a class="title" href="/session/${$key}">
        ${title}
      </a>
    </h2>

  `;
}.bind(self)();

export { template };
