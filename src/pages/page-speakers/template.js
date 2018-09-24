const template = (html, self) => function () {
  const { buy } = self;
  return html`

    <speaker-section>
      <speaker-list-loader>
        <speaker-list></speaker-list>
      </speaker-list-loader>
    </speaker-section>

    <footer-section></footer-section>
  `;
}.bind(self)();

export { template };
