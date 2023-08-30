import "@scripts/common.ts";

import "@styles/pages/signin.scss";
import { Navbar } from "@src/scripts/Navbar";

new Navbar();

class Signin {
  signinForm: HTMLFormElement | null;
  formItems: NodeListOf<Element> | null;
  constructor() {
    this.signinForm = document.getElementById("signin-form") as HTMLFormElement;
    this.formItems = document.querySelectorAll(".validate-first");
    this.init();
  }

  init() {
    this.validateOnSubmit();
    this.validateOnItemBlur();
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
    if (this.signinForm) {
      this.signinForm.addEventListener(
        "submit",
        (e: SubmitEvent) => {
          if (!this.signinForm!.checkValidity()) {
            e.stopPropagation();
            e.preventDefault();
          }
          this.signinForm!.classList.add("was-validated");
        },
        false
      );
    }
  }
}

const signInInstace = new Signin();
export default signInInstace;
