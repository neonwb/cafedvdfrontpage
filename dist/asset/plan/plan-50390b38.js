var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { N as Navbar } from "../Navbar/Navbar-65c3df79.js";
const plan = "";
new Navbar();
class Plan {
  constructor() {
    __publicField(this, "plans");
    this.plans = document.querySelectorAll(".plan");
    this.init();
  }
  init() {
    this.changeSelectedPlan();
  }
  changeSelectedPlan() {
    (this.plans ?? []).forEach((plan2) => {
      plan2.addEventListener("click", (e) => {
        const prevEl = document.getElementsByClassName("selected");
        Array.from(prevEl).forEach((el) => {
          el.classList.remove("selected");
        });
        const targetEl = e.currentTarget;
        targetEl.classList.add("selected");
      });
    });
  }
}
new Plan();
