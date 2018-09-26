const template = (html, self) => function () {
  const { speakers, _saveImg, _saveThumbnail } = this;
  return html`
    ${speakers.map(speaker => html`
      <speaker-summary-item
        .speaker=${speaker}
        @img-change=${_saveImg.bind(this)}
        @thumbnail-change=${_saveThumbnail.bind(this)}></speaker-summary-item>
    `)}
  `;
}.bind(self)();

export { template };
