const template = (html, self) => function () {
  const { sponsor, _updateImg, img, typeId } = this;
  const { name, url, storageImg, img: oldImg } = sponsor;
  return html`
    ${storageImg
      ? html`
        <storage-url-loader path="${storageImg}" @url-changed=${_updateImg.bind(this)}></storage-url-loader>
      `
      : ''
    }

    ${img || img
      ? html`
        ${url
          ? html`
            <a class="sponsor-item-image-anchor ${typeId}" href="${url}" target="_blank" rel="noopener" title="${name}">
              <lazy-picture alt="${name}" class="sponsor-item-image ${typeId}" src=${(img || oldImg)}></lazy-picture>
            </a>
          `
          : html`
            <lazy-picture alt="${name}" class="sponsor-item-image ${typeId}" src=${(img || oldImg)}></lazy-picture>
          `
        }

      `
      : ''
    }
  `;
}.bind(self)();

export { template };
