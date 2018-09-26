const template = (html, self) => function () {
  const { speaker, img, thumbnail, _imgChanged, _thumbnailChanged } = this;
  const { $key, name, affiliation, location } = speaker;
  return html`
    ${$key
      ? html`
        <storage-url-loader path="/devfest2018/speakers/${$key}.jpg" @url-changed=${_imgChanged.bind(this)}></storage-url-loader>
        <storage-url-loader path="/devfest2018/speakers/${$key}-thumbnail.jpg" @url-changed=${_thumbnailChanged.bind(this)}></storage-url-loader>
      `
      : ''
    }

    <div class="image-container">
      ${thumbnail
        ? html`
          <lazy-picture class="image" thumbnail=${thumbnail} src=${img}></lazy-picture>
        `
        : ''
      }
    </div>
    <p class="name">${name}</p>
    <p class="affiliation">${affiliation}</p>
    <p class="location">${location}</p>
    <a class="button-outline" href="/speaker/${$key}">View Profile</a>
  `;
}.bind(self)();

export { template };
