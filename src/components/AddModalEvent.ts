import ImgaeComponent from "./imageComponent.js";

class AddModalEvent {
  private addBtn: HTMLButtonElement;
  private modal: HTMLInputElement;
  private titleInput: HTMLInputElement;
  private deleteBnt: HTMLButtonElement;
  private urlInput: HTMLInputElement;

  constructor() {
    this.modal = document.querySelector(".modal")! as HTMLInputElement;

    this.addBtn = document.querySelector(
      ".modal__add-btn"
    )! as HTMLButtonElement;
    this.deleteBnt = document.querySelector(
      ".modal__delete-btn"
    )! as HTMLButtonElement;

    this.titleInput = document.querySelector(
      ".modal__title-input"
    )! as HTMLInputElement;
    this.urlInput = document.querySelector(
      ".modal__contain-input"
    )! as HTMLInputElement;
    this.deleteBnt.addEventListener("click", () => {
      this.modal.remove();
    });
  }

  addImageComponentMakerEvent = () => {
    this.addBtn?.addEventListener("click", () => {
      if (this.urlInput?.value && this.titleInput?.value) {
        const imgaeComponent = new ImgaeComponent(
          this.urlInput.value,
          this.titleInput.value
        );
        imgaeComponent.createImageComponent();
        this.modal?.remove();
      }
    });
  };
}

export default AddModalEvent;
