import AddModalEvent from "./AddModalEvent.js";

type ButtonType = "note" | "image" | "video" | "todo";

class CreateModal {
  private main: HTMLElement;
  constructor() {
    this.main = document.querySelector("main")! as HTMLElement;
  }

  createModal() {
    const modal: HTMLDivElement = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
		  <div class="modal__del-btn">
			<button class="modal__delete-btn">X</button>
		  </div>
		  <div class="modal__input-container">
			<span class="modal_title gap">TITLE</span>
			<input type="text" class="modal__title-input gap"/>
			<span class="modal_contain gap"></span>
			<input type="text" class="modal__contain-input gap"/>
		  </div>
		  <div class="modal__add-btn">
			<button class="modal__add-btn">Add</button>
		  </div>
		`;
    this.main?.appendChild(modal);
  }

  setTextandEvent(btnType: ButtonType) {
    const containSpan = document.querySelector(
      ".modal_contain"
    )! as HTMLSpanElement;

    const addEvent = new AddModalEvent();

    if (btnType == "note") {
      containSpan.innerText = "BODY";
      addEvent.addNoteComponentMakeEvent();
    } else if (btnType == "image") {
      containSpan.innerText = "URL";
      addEvent.addImageComponentMakerEvent();
    } else if (btnType == "video") {
      containSpan.innerText = "URL";
      addEvent.addVideoComponentMakerEvent();
    } else if (btnType == "todo") {
      containSpan.innerText = "BODY";
    }
  }
}

export default CreateModal;
