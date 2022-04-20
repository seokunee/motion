interface ICreateImageComponent {
  main: HTMLElement | null;
  createImageComponent(url: string, content: string): void;
  setListeners(): void;
  createImageComponentMaker(): void;
  addEventToCreateImageComponentMaker(): void;
}

class CreateImageComponent implements ICreateImageComponent {
  main: HTMLElement | null;

  constructor() {
    this.main = document.querySelector("main");
  }

  createImageComponentMaker() {
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
    this.main?.appendChild(modal);
  }

  addEventToCreateImageComponentMaker() {
    const modal: HTMLInputElement | null =
      document.querySelector(".image-modal");
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
    deleteBnt?.addEventListener("click", () => {
      console.log("delete!");
      modal?.remove();
    });
    addBnt?.addEventListener("click", () => {
      if (urlInput?.value && titleInput?.value) {
        this.createImageComponent(urlInput.value, titleInput.value);
        modal?.remove();
      }
    });
  }

  createImageComponent(url: string, content: string) {
    const container = document.createElement("div");
    // const delBtn = document.createElement("button");
    // const delBtn : HTMLButtonElement | null;

    container.classList.add("image-compo");
    // delBtn.classList.add("image-compo__del-btn");

    container.innerHTML = `
    <img
    class="image-compo__image"
    src=${url}
    alt="image"
    />
    <span class="image-compo__text">${content}</span>
    <button class="image-compo__del-btn">X</button>
    `;

    // delBtn
    // container.appendChild(delBtn);
    this.main?.appendChild(container);
  }

  setListeners() {
    const imageButton: HTMLElement | null =
      document.querySelector(".image_btn");
    imageButton?.addEventListener("click", () => {
      this.createImageComponentMaker();
      this.addEventToCreateImageComponentMaker();
    });
  }
}

export default CreateImageComponent;
