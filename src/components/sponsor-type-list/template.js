const template = (html, self) => function () {
  const { types } = this;
  return html`

    ${types.map(type => html`
      <sponsor-type-wrapper .typeId=${type.$key}>
        <sponsor-type-item>
        </sponsor-type-item>
      </sponsor-type-wrapper>
    `)}
  `;
}.bind(self)();

export { template };
