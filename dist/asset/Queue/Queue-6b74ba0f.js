var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import "../Navbar/Navbar-65c3df79.js";
class Queue {
  constructor() {
    __publicField(this, "title", "Star Wars: Episode IV: A New Hope");
    __publicField(this, "queueNumber", "1");
    __publicField(this, "moveTopButton");
    __publicField(this, "undoButton");
    __publicField(this, "queueInfo");
    this.moveTopButton = document.getElementById(
      "move-top"
    );
    this.undoButton = document.getElementById("undo-add");
    this.queueInfo = document.getElementById(
      "queue-action-info"
    );
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
    if (this.undoButton) {
      this.undoButton.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        const button = e.target;
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
      this.moveTopButton.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        const button = e.target;
        button.style.display = "none";
        if (this.queueInfo) {
          this.queueInfo.innerText = `${this.title} has been moved to the top of your Queue`;
        }
      });
    }
  }
}
export {
  Queue as Q
};
