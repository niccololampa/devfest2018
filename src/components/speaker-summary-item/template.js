const template = (html, self) => function () {
  const { speaker, img, thumbnail, _updateImg, _updateThumbnail } = this;
  const { $key, name, affiliation, location, img: oldImg, thumbnail: oldThumbnail } = speaker;
  return html`
    ${$key
      ? html`
        <storage-url-loader path="/devfest2018/speakers/${$key}.jpg" @url-changed=${_updateImg.bind(this)}></storage-url-loader>
        <storage-url-loader path="/devfest2018/speakers/${$key}-thumbnail.jpg" @url-changed=${_updateThumbnail.bind(this)}></storage-url-loader>
      `
      : ''
    }

    <div class="speaker-summary-item-image-container">
      ${thumbnail || oldThumbnail
        ? html`
          <a class="speaker-summary-item-image-anchor" href="/speakers/${$key}">
            <lazy-picture alt="Picture of ${name}" class="speaker-summary-item-image" thumbnail=${(thumbnail || oldThumbnail)} src=${(img || oldImg)}></lazy-picture>
          </a>
        `
        : ''
      }
    </div>
    <p class="name">${name}</p>
    <p class="affiliation">${affiliation}</p>
    <p class="location">${location}</p>
    <a class="button-outline" href="/speakers/${$key}">View Profile</a>
  `;
}.bind(self)();

export { template };
