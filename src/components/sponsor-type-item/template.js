const template = (html, self) => function () {
  const { type } = this;
  const { name, $key } = type;
  return html`
    <h2 class="sponsor-group-title">
      ${name}
    </h2>

    <div class="sponsor-list">
      <sponsor-list-wrapper .typeId=${$key}>
        <sponsor-list .typeId=${$key}>
        </sponsor-list>
      </sponsor-list-wrapper>
    </div>
  `;
}.bind(self)();

export { template };
