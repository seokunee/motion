class VideoComponent {
  private main: HTMLElement;
  private title: string;
  private url: string;

  constructor(url: string, title: string) {
    this.main = document.querySelector(".main")! as HTMLElement;
    this.title = title;
    this.url = url;
  }

  createvideoComponent() {
    const template = document.createElement("template");
    template.innerHTML = `
	  <section class="url-compo">
		<iframe id ="player" class="compo-src" title="YouTube video player" 
		frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
		 gyroscope; picture-in-picture" allowfullscreen></iframe>
	  <span class="compo__text"></span>
	  <button class="compo__del-btn">X</button>
	  </section>
	  `;
    const element = template.content.firstElementChild! as HTMLElement;

    const iframgeElement = element.querySelector(
      "#player"
    )! as HTMLImageElement;

    iframgeElement.src = this.url.replace("watch?v=", "embed/");

    const titleSpan = element.querySelector(".compo__text")! as HTMLSpanElement;

    titleSpan.innerText = this.title;

    const clone = document.importNode(template.content, true);
    const delBtn = clone.querySelector(".compo__del-btn")! as HTMLButtonElement;
    const videoComponent = clone.querySelector(".url-compo")! as HTMLElement;

    delBtn.addEventListener("click", () => {
      videoComponent.remove();
    });
    this.main.appendChild(clone);
  }
}

export default VideoComponent;
