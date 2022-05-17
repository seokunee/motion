import CreateModal from "./components/CreateModal.js";
export class App {
  private createModal;
  private imageBtn;
  private noteBtn;
  private todoBtn;
  private videoBtn;

  constructor() {
    this.imageBtn = document.querySelector(".image_btn")! as HTMLButtonElement;
    this.noteBtn = document.querySelector(".note_btn")! as HTMLButtonElement;
    this.todoBtn = document.querySelector(".todo_btn")! as HTMLButtonElement;
    this.videoBtn = document.querySelector(".video_btn")! as HTMLButtonElement;

    this.createModal = new CreateModal();
    this.imageBtn.addEventListener("click", () => {
      this.createModal.createModal();
      this.createModal.setTextandEvent("image");
    });
    this.videoBtn.addEventListener("click", () => {
      this.createModal.createModal();
      this.createModal.setTextandEvent("video");
    });
    this.noteBtn.addEventListener("click", () => {
      this.createModal.createModal();
      this.createModal.setTextandEvent("note");
    });
    this.todoBtn.addEventListener("click", () => {
      this.createModal.createModal();
      this.createModal.setTextandEvent("todo");
    });
  }
}

const app = new App();
