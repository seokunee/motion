interface IApp {
  main: HTMLElement | null;
}

class App {
  private main: HTMLElement | null;

  constructor() {
    this.main = document.querySelector("main");
  }

  appendImageComponent(url: string, content: string) {
    const container = document.createElement("div");
    container.classList.add("container");
    container.setAttribute("draggable", "true");

    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", url);
    const contentElement = document.createElement("div");
    contentElement.innerHTML = content;
    this.main?.appendChild(imgElement);
  }

  setListeners() {
    const imageButton = document.querySelector("image_btn");
    imageButton?.addEventListener('click', this.appendImageComponent('www', 'www'));
  }
}


int main ()
{
  int arr[4];
  ft_putstr('은지 공듀');

}


