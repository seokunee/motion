import { addDragEventToLastElement } from "./dragEvent.js";
class ImageComponent {
  private main: HTMLElement;
  private title: string;
  private url: string;

  constructor(url: string, title: string) {
    this.main = document.querySelector(".main")! as HTMLElement;
    this.title = title;
    this.url = url;
  }

  createImageComponent() {
    const template = document.createElement("template");
    template.innerHTML = `
    <section class="url-compo draggable" draggable="true">
      <img
      class="compo-image"
      onerror="this.src='/public/image/init_image.jpeg';"
      />
      <span class="compo__text"></span>
      <button class="compo__del-btn">X</button>
    </section>
    `;
    const element = template.content.firstElementChild! as HTMLElement;

    const imageElement = element.querySelector(
      ".compo-image"
    )! as HTMLImageElement;

    imageElement.src = this.url;
    imageElement.alt = this.title;

    const titleSpan = element.querySelector(".compo__text")! as HTMLSpanElement;

    titleSpan.innerText = this.title;

    const clone = document.importNode(template.content, true);
    const delBtn = clone.querySelector(".compo__del-btn")! as HTMLButtonElement;
    const imageComponent = clone.querySelector(".url-compo")! as HTMLElement;

    delBtn.addEventListener("click", () => {
      imageComponent.remove();
    });
    this.main.appendChild(clone);
    addDragEventToLastElement();
  }
}

export default ImageComponent;
