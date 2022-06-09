import CreateModal, { ButtonType } from "./components/CreateModal.js";
export class App {
  private createModal;
  private createBtn;

  constructor() {
    this.createBtn = document.querySelectorAll(".create_btn");

    this.createBtn.forEach((btnElement) => {
      btnElement.addEventListener("click", (event) => {
        let btnElement = event.currentTarget as HTMLElement;
        this.createModal.createModal();
        this.createModal.setTextandEvent(
          btnElement.getAttribute("name") as ButtonType
        );
      });
    });
    this.createModal = new CreateModal();
  }
}

const app = new App();
