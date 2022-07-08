import { BaseComponent } from "./../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(url: string, title: string) {
    super(
      `
			<section class="video">
				<div class="video__player">
					<iframe class="video__iframe" title="YouTube video player" 
					frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
					gyroscope; picture-in-picture" a0llowfullscreen></iframe>
					<h3 class="video__title"></h3>
				</div>
			</section>
      `
    );

    const videoElement = this.element.querySelector(
      ".video__iframe"
    )! as HTMLIFrameElement;

    videoElement.src = this.convertToEmbeddedURL(url);

    const videoTitle = this.element.querySelector(
      ".video__title"
    )! as HTMLParagraphElement;
    videoTitle.textContent = title;
  }

  private convertToEmbeddedURL(url: string): string {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);
    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    return url;
  }
}
