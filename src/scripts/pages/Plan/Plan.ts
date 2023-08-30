import "@scripts/common.ts";

import "@styles/pages/plan.scss";
import { Navbar } from "@src/scripts/Navbar";

new Navbar();

class Plan {
  plans: NodeListOf<HTMLElement>;
  constructor() {
    this.plans = document.querySelectorAll(".plan");
    this.init();
  }

  init() {
    this.changeSelectedPlan();
  }

  changeSelectedPlan() {
    (this.plans ?? []).forEach((plan) => {
      plan.addEventListener("click", (e: MouseEvent) => {
        const prevEl = document.getElementsByClassName("selected");
        Array.from(prevEl).forEach((el) => {
          el.classList.remove("selected");
        });
        const targetEl = e.currentTarget as HTMLDivElement;
        targetEl.classList.add("selected");
      });
    });
  }
}

const planInstance = new Plan();
export default planInstance;
