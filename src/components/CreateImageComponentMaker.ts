import ImgaeComponent from "./imageComponent.js";

class CreateImageComponentMaker {
  private main: HTMLElement;
  constructor() {
    this.main = document.querySelector("main")! as HTMLElement;
  }

  // 이미지 생성 모달 만들기
  createImageComponentMaker = () => {
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
  };

  // 이미지 모달 이벤트 만들기
  addEventToCreateImageComponentMaker = () => {
    const modal = document.querySelector(".image-modal")! as HTMLInputElement;
    const deleteBnt = document.querySelector(
      ".image-modal__delete-btn"
    )! as HTMLButtonElement;
    const addBnt = document.querySelector(
      ".image-modal__add-btn"
    )! as HTMLButtonElement;
    const titleInput = document.querySelector(
      ".image-modal__title-input"
    )! as HTMLInputElement;
    const urlInput = document.querySelector(
      ".image-modal__url-input"
    )! as HTMLInputElement;
    deleteBnt?.addEventListener("click", () => {
      modal?.remove();
    });
    addBnt?.addEventListener("click", () => {
      if (urlInput?.value && titleInput?.value) {
        const imgaeComponent = new ImgaeComponent(
          urlInput.value,
          titleInput.value
        );
        imgaeComponent.createImageComponent();
        modal?.remove();
      }
    });
  };
}

export default CreateImageComponentMaker;
