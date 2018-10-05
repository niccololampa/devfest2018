const template = (html, self) => function () {
  const { speaker, img, thumbnail, _updateImg, _updateThumbnail } = this;
  const { $key, name, img: oldImg, thumbnail: oldThumbnail } = speaker;
  return html`
    ${$key
      ? html`
        <storage-url-loader path="/devfest2018/speakers/${$key}.jpg" @url-changed=${_updateImg.bind(this)}></storage-url-loader>
        <storage-url-loader path="/devfest2018/speakers/${$key}-thumbnail.jpg" @url-changed=${_updateThumbnail.bind(this)}></storage-url-loader>
      `
      : ''
    }

    <div class="speaker-summary-item-two-image-container">
      ${thumbnail || oldThumbnail
        ? html`
          <a class="speaker-summary-item-two-image-anchor" href="/speakers/${$key}">
            <lazy-picture alt="Picture of ${name}" class="speaker-summary-item-two-image" thumbnail=${(thumbnail || oldThumbnail)} src=${(img || oldImg)}></lazy-picture>
          </a>
        `
        : ''
      }
    </div>
    <a class="speaker-summary-item-two-name" href="/speakers/${$key}">${name}</a>
  `;
}.bind(self)();

export { template };
