interface ICreateImageComponent {
  main: HTMLElement | null;
  createImageComponent(url: string, content: string): void;
  setListeners(): void;
  beforeCreateImageComponent(): void;
}

class CreateImageComponent implements ICreateImageComponent {
  main: HTMLElement | null;

  constructor() {
    this.main = document.querySelector("main");
  }

  beforeCreateImageComponent() {
    console.log("3");

    const modal: HTMLDivElement = document.createElement("div");
    modal.classList.add("image-modal");
    modal.innerHTML = `
      <div class="del-btn-container">
        <button class="image-modal__delete-btn">X</button>
      </div>
      <div class="image-modal__input-container">
        <span class="image-modal_title gap">Title</span>
        <input type="text" class="image-modal__title-input gap"/>
        <span class="image_modal_url gap">URL</span>
        <input type="text" class="image-modal__url-input gap"/>
      </div>
      <div class="add-btn-container">
        <button class="image-modal__add-btn">Add</button>
      </div>
    `;

    const deleteBnt: HTMLButtonElement | null = document.querySelector(
      ".image-modal__delete-btn"
    );
    const addBnt: HTMLButtonElement | null = document.querySelector(
      ".image-modal__add-btn"
    );
    const titleInput: HTMLInputElement | null = document.querySelector(
      ".image-modal__title-input"
    );
    const urlInput: HTMLInputElement | null = document.querySelector(
      ".image-modal__url-input"
    );
    this.main?.appendChild(modal);
    deleteBnt?.addEventListener("click", () => {
      modal.remove();
    });
    addBnt?.addEventListener("click", () => {
      if (urlInput?.innerText && titleInput?.innerText) {
        this.createImageComponent(urlInput?.innerText, titleInput?.innerText);
        modal.remove();
      }
    });
  }

  createImageComponent(url: string, content: string) {
    console.log("2");

    const container = document.createElement("div");
    container.classList.add("container");
    container.setAttribute("draggable", "true");

    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", url);
    const contentElement: HTMLDivElement = document.createElement("div");
    contentElement.innerHTML = content;
    this.main?.appendChild(imgElement);
  }

  setListeners() {
    const imageButton: HTMLElement | null =
      document.querySelector(".image_btn");
    imageButton?.addEventListener("click", () => {
      this.beforeCreateImageComponent();
    });
    console.log("1");
  }
}

export default CreateImageComponent;
