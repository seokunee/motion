class TodoComponent {
  private main: HTMLElement;
  private title: string;
  private body: string;

  constructor(body: string, title: string) {
    this.main = document.querySelector(".main")! as HTMLElement;
    this.title = title;
    this.body = body;
  }

  createTodoComponent() {
    const template = document.createElement("template");
    template.innerHTML = `
		<section class="body-compo">
	  <div class="compo__info-container">
		  <span class="compo__title"></span>
		  <ul >
		  	<li class="compo__body"></li>
		  </ul>
	  </div>
		<button class="compo__del-btn">X</button>
		</section>
		`;
    const element = template.content.firstElementChild! as HTMLElement;

    const titleSpan = element.querySelector(
      ".compo__title"
    )! as HTMLSpanElement;

    const bodyP = element.querySelector(".compo__body")! as HTMLElement;

    titleSpan.innerText = this.title;
    bodyP.innerText = this.body;

    const clone = document.importNode(template.content, true);
    const delBtn = clone.querySelector(".compo__del-btn")! as HTMLButtonElement;
    const imageComponent = clone.querySelector(".body-compo")! as HTMLElement;

    delBtn.addEventListener("click", () => {
      imageComponent.remove();
    });
    this.main.appendChild(clone);
  }
}

export default TodoComponent;
