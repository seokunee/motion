import { Component } from "./components/page/component.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { NoteComponent } from "./components/page/item/note.js";
import { VideoComponent } from "./components/page/item/video.js";
import { ImageComponent } from "./components/page/item/image.js";
import { Composable, PageComponent } from "./components/page/page.js";

class App {
  private readonly page: Component & Composable;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      "image Title",
      "https://picsum.photos/600/300"
    );
    this.page.addChild(image);

    const video = new VideoComponent(
      "https://www.youtube.com/watch?v=-czeedQ5ioM",
      "스트레스 극복방법"
    );
    this.page.addChild(video);

    const note = new NoteComponent(
      "강의 다 듣기",
      "열심히 타입스크립트 강의를 들어보자."
    );
    this.page.addChild(note);

    const todo = new TodoComponent("할일", "공부하기");
    this.page.addChild(todo);
  }
}

new App(document.querySelector(".document")! as HTMLElement);
