import "@scripts/common.ts";

export class Queue {
  title = "Star Wars: Episode IV: A New Hope";
  queueNumber = "1";
  moveTopButton: HTMLButtonElement | null;
  undoButton: HTMLButtonElement | null;
  queueInfo: HTMLHeadElement | null;

  constructor() {
    this.moveTopButton = document.getElementById(
      "move-top"
    ) as HTMLButtonElement;
    this.undoButton = document.getElementById("undo-add") as HTMLButtonElement;
    this.queueInfo = document.getElementById(
      "queue-action-info"
    ) as HTMLHeadElement;
    this.init();
  }

  init() {
    this.bindInitInfo();
    this.onUndoClick();
    this.onMoveTopClick();
  }
  bindInitInfo() {
    if (this.queueInfo) {
      this.queueInfo.innerText = `${this.title} has been added to your Queue at position ${this.queueNumber}`;
    }
  }

  onUndoClick() {
    //Star Wars: Episode IV: A New Hope has been removed from your Queue
    if (this.undoButton) {
      this.undoButton.addEventListener("click", (e: Event) => {
        e.stopPropagation();
        e.preventDefault();
        const button = e.target as HTMLButtonElement;
        button.style.display = "none";
        if (this.queueInfo) {
          this.queueInfo.innerText = `${this.title} has been removed from your Queue`;
        }
        if (this.moveTopButton) {
          this.moveTopButton.style.display = "none";
        }
      });
    }
  }

  onMoveTopClick() {
    if (this.moveTopButton) {
      this.moveTopButton.addEventListener("click", (e: Event) => {
        e.stopPropagation();
        e.preventDefault();
        const button = e.target as HTMLButtonElement;
        button.style.display = "none";
        if (this.queueInfo) {
          this.queueInfo.innerText = `${this.title} has been moved to the top of your Queue`;
        }
      });
    }
  }
}

export default Queue;
