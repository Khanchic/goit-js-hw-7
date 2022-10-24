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

galleryContainer.addEventListener("click", createRef);

function createRef(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
<img src="${event.target.dataset.source}">`,
    {
      onClose: (instance) => {
        document.removeEventListener("keydown", closeOnEsc);
      },
      onShow: (instance) => {
        document.addEventListener("keydown", closeOnEsc);
      },
    }
  );
  instance.show();

  function closeOnEsc(e) {
    console.log(e);
    if (e.code !== "Escape") {
      return;
    }
    instance.close();
  }
}
