let dragged: Node | undefined;

export const addDragEventToLastElement = () => {
  const lastElement = document.querySelector(".draggable:last-child");

  lastElement?.addEventListener("dragstart", (e) => {
    lastElement.classList.add("dragging");
    dragged = e.currentTarget as Node;
  });

  lastElement?.addEventListener("dragend", () => {
    lastElement.classList.remove("dragging");
  });

  lastElement?.addEventListener("dragover", (e) => {
    e.preventDefault();
    lastElement.classList.add("dragenter");
  });

  lastElement?.addEventListener("dragleave", () => {
    lastElement.classList.remove("dragenter");
  });

  lastElement?.addEventListener("drop", (e) => {
    e.preventDefault();
    lastElement.classList.remove("dragenter");
    const dropElement = e.currentTarget as Node;
    if (dragged) {
      dropElement.parentNode?.insertBefore(dragged, dropElement);
    }
  });
};
