const template = (html, self) => function () {
  const { speaker, img, thumbnail, _updateImg, _updateThumbnail } = this;
  const { $key, name, affiliation, location, bio, session, img: oldImg, thumbnail: oldThumbnail } = speaker;
  return html`
    ${$key
      ? html`
        <storage-url-loader path="/devfest2018/speakers/${$key}.jpg" @url-changed=${_updateImg.bind(this)}></storage-url-loader>
        <storage-url-loader path="/devfest2018/speakers/${$key}-thumbnail.jpg" @url-changed=${_updateThumbnail.bind(this)}></storage-url-loader>
      `
      : ''
    }
    <div class="image-section">
      <div class="image-container">
        ${thumbnail || oldThumbnail
          ? html`
            <lazy-picture class="image" thumbnail=${(thumbnail || oldThumbnail)} src=${(img || oldImg)}></lazy-picture>
          `
          : ''
        }
      </div>
      <h1 class="h1">
        ${name}
      </h1>
      <p class="affiliation">
        ${affiliation}
      </p>
      <p class="location">
        ${location}
      </p>
    </div>
    <div class="bio-section">
      <mark-lite class="bio" .text=${bio}></mark-lite>

      <session-summary-loader .sessionId=${session}>
        <session-summary-item></session-summary-item>
      </session-summary-item>
    </div>
  `;
}.bind(self)();

export { template };
