class CreateImageComponent {
    constructor() {
        this.main = document.querySelector("main");
    }
    createImageComponentMaker() {
        var _a;
        const modal = document.createElement("div");
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
        (_a = this.main) === null || _a === void 0 ? void 0 : _a.appendChild(modal);
    }
    addEventToCreateImageComponentMaker() {
        const modal = document.querySelector(".image-modal");
        const deleteBnt = document.querySelector(".image-modal__delete-btn");
        const addBnt = document.querySelector(".image-modal__add-btn");
        const titleInput = document.querySelector(".image-modal__title-input");
        const urlInput = document.querySelector(".image-modal__url-input");
        deleteBnt === null || deleteBnt === void 0 ? void 0 : deleteBnt.addEventListener("click", () => {
            console.log("delete!");
            modal === null || modal === void 0 ? void 0 : modal.remove();
        });
        addBnt === null || addBnt === void 0 ? void 0 : addBnt.addEventListener("click", () => {
            if ((urlInput === null || urlInput === void 0 ? void 0 : urlInput.value) && (titleInput === null || titleInput === void 0 ? void 0 : titleInput.value)) {
                this.createImageComponent(urlInput.value, titleInput.value);
                modal === null || modal === void 0 ? void 0 : modal.remove();
            }
        });
    }
    createImageComponent(url, content) {
        var _a;
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
        (_a = this.main) === null || _a === void 0 ? void 0 : _a.appendChild(container);
    }
    setListeners() {
        const imageButton = document.querySelector(".image_btn");
        imageButton === null || imageButton === void 0 ? void 0 : imageButton.addEventListener("click", () => {
            this.createImageComponentMaker();
            this.addEventToCreateImageComponentMaker();
        });
    }
}
export default CreateImageComponent;
