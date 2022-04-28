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
	  <section class="video-compo">
		<iframe id ="player" width="60%" height="100%" title="YouTube video player" 
		frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
		 gyroscope; picture-in-picture" allowfullscreen></iframe>
	  <span class="video-compo__text"></span>
	  <button class="video-compo__del-btn">X</button>
	  </section>
	  `;
    const element = template.content.firstElementChild! as HTMLElement;

    const iframgeElement = element.querySelector(
      "#player"
    )! as HTMLImageElement;

    iframgeElement.src = this.url.replace("watch?v=", "embed/");

    const titleSpan = element.querySelector(
      ".video-compo__text"
    )! as HTMLSpanElement;

    titleSpan.innerText = this.title;

    const clone = document.importNode(template.content, true);
    const delBtn = clone.querySelector(
      ".video-compo__del-btn"
    )! as HTMLButtonElement;
    const videoComponent = clone.querySelector(".video-compo")! as HTMLElement;

    delBtn.addEventListener("click", () => {
      videoComponent.remove();
    });
    this.main.appendChild(clone);
  }
}

export default VideoComponent;
