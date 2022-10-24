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
// galleryContainer.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (e.target.nodeName !== "IMG") {
//     return;
//   }
//   const instance = basicLightbox.create(`
//     <img src=${e.target.dataset.source} width="800" height="600">
// `);
//   instance.show();
//   document.addEventListener("keydown", onModalOpen);

//     instance.close();
//     document.removeEventListener("keydown", onModalOpen);
//   }
// });

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
        window.removeEventListener("keydown", closeOnEsc);
      },
      onShow: (instance) => {
        window.addEventListener("keydown", closeOnEsc);
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
