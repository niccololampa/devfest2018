const template = (html, self) => function () {
  const { speaker } = this;
  const { $key, affiliation, location, img } = speaker;
  return html`
    <div class="image-container">
      <lazy-picture class="image" src=${img}></lazy-picture>
    </div>
    <p class="affiliation">${affiliation}</p>
    <p class="location">${location}</p>
    <a class="button-outline" href="/speaker/${$key}">View Profile</a>
  `;
}.bind(self)();

export { template };
