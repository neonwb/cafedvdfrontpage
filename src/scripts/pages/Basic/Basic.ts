import "@scripts/common.ts";

import "@styles/pages/basic.scss";
import { Navbar } from "@src/scripts/Navbar";

new Navbar();

class Basic {
  signupForm: HTMLFormElement | null;
  formItems: NodeListOf<Element> | null;
  showButton: HTMLButtonElement | null;
  passwordInput: HTMLInputElement | null;

  constructor() {
    this.signupForm = document.getElementById("signup-form") as HTMLFormElement;
    this.formItems = document.querySelectorAll(".validate-first");
    this.showButton = document.getElementById(
      "show-password"
    ) as HTMLButtonElement;
    this.passwordInput = document.getElementById(
      "password"
    ) as HTMLInputElement;
    this.init();
  }

  init() {
    this.validateOnSubmit();
    this.validateOnItemBlur();
    this.toggleShowButton();
  }

  toggleShowButton() {
    this.showButton?.addEventListener("click", (e: MouseEvent) => {
      if (this.passwordInput && this.showButton) {
        if (this.passwordInput.type === "password") {
          this.passwordInput.type = "text";
          this.showButton.textContent = "hide";
        } else {
          this.passwordInput.type = "password";
          this.showButton.textContent = "show";
        }
      }
    });
  }

  validateOnItemBlur() {
    (this.formItems ?? []).forEach((item) => {
      item.addEventListener("blur", (e: Event) => {
        const inputItem = e.target as HTMLInputElement;
        if (!inputItem.checkValidity()) {
          inputItem.classList.add("is-invalid");
        } else {
          inputItem.classList.remove("is-invalid");
        }
      });
    });
  }

  validateOnSubmit() {
    if (this.signupForm) {
      this.signupForm.addEventListener(
        "submit",
        (e: SubmitEvent) => {
          if (!this.signupForm!.checkValidity()) {
            e.stopPropagation();
            e.preventDefault();
          }
          this.signupForm!.classList.add("was-validated");
        },
        false
      );
    }
  }
}

const basicSignupInstace = new Basic();
export default basicSignupInstace;
