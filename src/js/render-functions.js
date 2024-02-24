export function render(data) {
  const container = document.querySelector('.gallery');

  function imageTemplate(image) {
    const webformatURL = image.webformatURL;
    const largeImageURL = image.largeImageURL;
    const tags = image.tags;
    const likes = image.likes;
    const views = image.views;
    const comments = image.comments;
    const downloads = image.downloads;

    return `<div class="card">
            <a href="${largeImageURL}" class="large-image-link">
              <img class="image" src="${webformatURL} alt="${tags}">
              <div class="info">
                <p class="info-item">"Likes ${likes}"</p>
                <p class="info-item">"Views ${views}"</p>
                <p class="info-item">"Comments ${comments}"</p>
                <p class="info-item">"Downloads ${downloads}"</p>
              </div>
            </a>
          </div>`;
  }

  container.innerHTML = '';

  data.forEach(image => {
    const markup = imageTemplate(image);
    container.insertAdjacentHTML('beforeend', markup);
  });
}
