class ImgaeComponent {
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
    <section class="image-compo">
    <img
    class="image-compo__image"
    />
    <span class="image-compo__text"></span>
    <button class="image-compo__del-btn">X</button>
    </section>
    `;
    const element = template.content.firstElementChild! as HTMLElement;

    const imageElement = element.querySelector(
      ".image-compo__image"
    )! as HTMLImageElement;

    imageElement.src = this.url;
    imageElement.alt = this.title;

    const titleSpan = element.querySelector(
      ".image-compo__text"
    )! as HTMLSpanElement;

    titleSpan.innerText = this.title;

    const clone = document.importNode(template.content, true);
    const delBtn = clone.querySelector(
      ".image-compo__del-btn"
    )! as HTMLButtonElement;
    const imageComponent = clone.querySelector(".image-compo")! as HTMLElement;

    delBtn.addEventListener("click", () => {
      imageComponent.remove();
    });
    this.main.appendChild(clone);
  }
}

export default ImgaeComponent;
