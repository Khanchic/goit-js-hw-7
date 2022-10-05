import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

galleryItems.forEach((galleryItem) => {
  galleryContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src=${galleryItem.preview}
          data-source=${galleryItem.original}
          alt=${galleryItem.description}
        />
      </a>
    </div>`
  );
});
galleryContainer.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src=${e.target.dataset.source} width="800" height="600">
`);
  instance.show();
  window.addEventListener("keydown", onModalOpen);

  function onModalOpen(e) {
    console.log(e);
    if (e.code !== "Escape") {
      return;
    }

    instance.close();
    window.removeEventListener("keydown", onModalOpen);
  }
});
