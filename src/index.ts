import CreateModal from "./components/CreateModal.js";
export class App {
  constructor() {
    const imageBtn = document.querySelector(".image_btn")! as HTMLButtonElement;
    const createModal = new CreateModal();
    imageBtn.addEventListener("click", () => {
      createModal.createModal();
      createModal.setTextandEvent("image");
      console.log("1");
    });
  }
}

const app = new App();
