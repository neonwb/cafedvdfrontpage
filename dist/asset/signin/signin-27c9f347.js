var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { N as Navbar } from "../Navbar/Navbar-65c3df79.js";
const signin = "";
new Navbar();
class Signin {
  constructor() {
    __publicField(this, "signinForm");
    __publicField(this, "formItems");
    this.signinForm = document.getElementById("signin-form");
    this.formItems = document.querySelectorAll(".validate-first");
    this.init();
  }
  init() {
    this.validateOnSubmit();
    this.validateOnItemBlur();
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
    if (this.signinForm) {
      this.signinForm.addEventListener(
        "submit",
        (e) => {
          if (!this.signinForm.checkValidity()) {
            e.stopPropagation();
            e.preventDefault();
          }
          this.signinForm.classList.add("was-validated");
        },
        false
      );
    }
  }
}
new Signin();
