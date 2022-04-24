class ImgaeComponent {
  private main: HTMLElement;
  private title: string;
  private url: string;

  constructor(title: string, url: string) {
    this.main = document.querySelector(".main")! as HTMLElement;
    this.title = title;
    this.url = url;
  }

  createImageComponent() {
    const template = document.createElement("template");
    this.main = document.querySelector(".main")! as HTMLElement;
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

    const imageComponent = element.querySelector(
      ".image-compo"
    )! as HTMLElement;

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
    this.main.appendChild(clone);
  }

  setEventToImageComponent() {
    const delBtn = document.querySelector(
      ".image-compo__del-btn"
    )! as HTMLButtonElement;

    console.log(delBtn);
    delBtn.addEventListener("click", (e: MouseEvent) => {
      const curTarget = e.target! as ChildNode;
      this.main.removeChild(curTarget.parentElement as ParentNode);
    });
  }
}

export default ImgaeComponent;
