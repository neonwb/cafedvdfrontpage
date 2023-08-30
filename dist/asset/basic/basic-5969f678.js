var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { N as Navbar } from "../Navbar/Navbar-65c3df79.js";
const basic = "";
new Navbar();
class Basic {
  constructor() {
    __publicField(this, "signupForm");
    __publicField(this, "formItems");
    __publicField(this, "showButton");
    __publicField(this, "passwordInput");
    this.signupForm = document.getElementById("signup-form");
    this.formItems = document.querySelectorAll(".validate-first");
    this.showButton = document.getElementById(
      "show-password"
    );
    this.passwordInput = document.getElementById(
      "password"
    );
    this.init();
  }
  init() {
    this.validateOnSubmit();
    this.validateOnItemBlur();
    this.toggleShowButton();
  }
  toggleShowButton() {
    var _a;
    (_a = this.showButton) == null ? void 0 : _a.addEventListener("click", (e) => {
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
      item.addEventListener("blur", (e) => {
        const inputItem = e.target;
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
        (e) => {
          if (!this.signupForm.checkValidity()) {
            e.stopPropagation();
            e.preventDefault();
          }
          this.signupForm.classList.add("was-validated");
        },
        false
      );
    }
  }
}
new Basic();
