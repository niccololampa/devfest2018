const template = (html, self) => function () {
  const { sponsors, typeId } = this;
  return html`
    ${sponsors.map(sponsor => html`
      <sponsor-wrapper .sponsorId=${sponsor}>
        <sponsor-item .typeId=${typeId}>
        </sponsor-item>
      </sponsor-wrapper>
    `)}
  `;
}.bind(self)();

export { template };
