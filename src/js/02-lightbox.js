import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

galleryItems.forEach((galleryItem) => {
  galleryContainer.insertAdjacentHTML(
    "beforeend",
    `
      <a class="gallery__item" href="${galleryItem.original}">
        <img
          class="gallery__image"
          src=${galleryItem.preview}
          data-source=${galleryItem.original}
          alt=${galleryItem.description}
        />
      </a>
    `
  );
});
var lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
