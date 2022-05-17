import ImageComponent from "./imageComponent.js";
import VideoComponent from "./VideoComponent.js";
import NoteComponent from "./NoteComponent.js";

class AddModalEvent {
  private addBtn: HTMLButtonElement;
  private modal: HTMLInputElement;
  private titleInput: HTMLInputElement;
  private deleteBnt: HTMLButtonElement;
  private containInput: HTMLInputElement;

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
    this.containInput = document.querySelector(
      ".modal__contain-input"
    )! as HTMLInputElement;

    this.deleteBnt.addEventListener("click", () => {
      this.modal.remove();
    });
  }

  addImageComponentMakerEvent = () => {
    this.addBtn?.addEventListener("click", () => {
      if (this.containInput?.value && this.titleInput?.value) {
        const imageComponent = new ImageComponent(
          this.containInput.value,
          this.titleInput.value
        );
        imageComponent.createImageComponent();
        this.modal?.remove();
      }
    });
  };

  addVideoComponentMakerEvent = () => {
    this.addBtn?.addEventListener("click", () => {
      if (this.containInput?.value && this.titleInput?.value) {
        const videoComponent = new VideoComponent(
          this.containInput.value,
          this.titleInput.value
        );
        videoComponent.createvideoComponent();
        this.modal?.remove();
      }
    });
  };

  addNoteComponentMakeEvent = () => {
    this.addBtn?.addEventListener("click", () => {
      if (this.containInput?.value && this.titleInput?.value) {
        const noteComponent = new NoteComponent(
          this.containInput.value,
          this.titleInput.value
        );
        noteComponent.createNoteComponent();
        this.modal?.remove();
      }
    });
  };
}

export default AddModalEvent;
