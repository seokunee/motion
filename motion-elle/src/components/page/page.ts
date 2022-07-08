import { BaseComponent, Component } from "./component.js";

type OnCloseListenr = () => void;

export interface Composable {
  addChild(child: Component): void;
  // setOnCloseListener 을 inferface에 추가 시키지 않는 이유는 setOnCloseListener는 클래스 내부에서만 사용하는 것이기 때문에?
}

class PageItemContainer
  extends BaseComponent<HTMLElement>
  implements Composable
{
  private closeListenr?: OnCloseListenr;

  constructor() {
    super(`
  <li class="page-item">
  <section class="page-item__body">
  </section>
  <div class="page-item__controls">
    <button class="close">&times;</button>
  </div>
  </li>
  `);

    const closeBtn = this.element.querySelector(".close")! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListenr && this.closeListenr();
    };
  }

  addChild(child: Component) {
    const container = this.element.querySelector(
      ".page-item__body"
    )! as HTMLElement;
    child.attachTo(container);
  }

  setOnCloseListener(listener: OnCloseListenr) {
    this.closeListenr = listener;
  }
}

export class PageComponent
  extends BaseComponent<HTMLUListElement>
  implements Composable
{
  constructor() {
    super(`<ul class="page"></ul>`);
  }

  addChild(section: Component) {
    const item = new PageItemContainer();
    item.addChild(section);
    item.attachTo(this.element, "beforeend");
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}
