class CreateImageComponent {
    constructor() {
        this.main = document.querySelector("main");
    }
    beforeCreateImageComponent() {
        var _a;
        console.log("3");
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
        const deleteBnt = document.querySelector(".image-modal__delete-btn");
        const addBnt = document.querySelector(".image-modal__add-btn");
        const titleInput = document.querySelector(".image-modal__title-input");
        const urlInput = document.querySelector(".image-modal__url-input");
        (_a = this.main) === null || _a === void 0 ? void 0 : _a.appendChild(modal);
        deleteBnt === null || deleteBnt === void 0 ? void 0 : deleteBnt.addEventListener("click", () => {
            modal.remove();
        });
        addBnt === null || addBnt === void 0 ? void 0 : addBnt.addEventListener("click", () => {
            if ((urlInput === null || urlInput === void 0 ? void 0 : urlInput.innerText) && (titleInput === null || titleInput === void 0 ? void 0 : titleInput.innerText)) {
                this.createImageComponent(urlInput === null || urlInput === void 0 ? void 0 : urlInput.innerText, titleInput === null || titleInput === void 0 ? void 0 : titleInput.innerText);
                modal.remove();
            }
        });
    }
    createImageComponent(url, content) {
        var _a;
        console.log("2");
        const container = document.createElement("div");
        container.classList.add("container");
        container.setAttribute("draggable", "true");
        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", url);
        const contentElement = document.createElement("div");
        contentElement.innerHTML = content;
        (_a = this.main) === null || _a === void 0 ? void 0 : _a.appendChild(imgElement);
    }
    setListeners() {
        const imageButton = document.querySelector(".image_btn");
        imageButton === null || imageButton === void 0 ? void 0 : imageButton.addEventListener("click", () => {
            this.beforeCreateImageComponent();
        });
        console.log("1");
    }
}
export default CreateImageComponent;
