import CreateImageComponentMaker from "./components/CreateImageComponentMaker.js";
import { render } from "./test.js";
import CreateNoteComponentMaker from "./components/CreateNoteComponentMaker.js";
export class App {
  constructor() {
    const imageBtn = document.querySelector(".image_btn")! as HTMLButtonElement;
    const createImageMaker = new CreateImageComponentMaker();
    imageBtn.addEventListener("click", () => {
      createImageMaker.createImageComponentMaker();
      createImageMaker.addEventToCreateImageComponentMaker();
    });
  }
}

const app = new App();
