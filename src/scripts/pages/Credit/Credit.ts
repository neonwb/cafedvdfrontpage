import "@scripts/common.ts";

import "@styles/pages/credit.scss";
import Cleave from "cleave.js";
import { Navbar } from "@src/scripts/Navbar";

export const creditType = {
  unknown: "unknown",
  visa: "visa",
  mastercard: "mastercard",
  amex: "amex",
  discover: "discover",
} as const;

new Navbar();

class Credit {
  signupForm: HTMLFormElement | null;
  formItems: NodeListOf<Element> | null;
  logoItems: NodeListOf<Element> | null;
  creditCard: Cleave | null;
  expiration: Cleave | null;
  security: Cleave | null;

  constructor() {
    this.signupForm = document.getElementById("signup-form") as HTMLFormElement;
    this.formItems = document.querySelectorAll(".validate-first");
    this.logoItems = document.querySelectorAll(".credit-logo");
    this.init();

    const self = this;
    this.creditCard = new Cleave(".input-credit", {
      creditCard: true,
      onCreditCardTypeChanged: function (type) {
        console.log(type);
        //visa
        //amex
        //mastercard
        //discover
        self.highlightCreditLogo(type as keyof typeof creditType);
      },
    });

    this.expiration = new Cleave(".input-expiration", {
      date: true,
      datePattern: ["m", "y"],
    });

    this.security = new Cleave(".input-security", {
      numeral: true,
      numeralPositiveOnly: true,
      numeralIntegerScale: 5,
      numeralThousandsGroupStyle: "none",
    });
  }

  init() {
    this.validateOnSubmit();
    this.validateOnItemBlur();
  }

  highlightCreditLogo(type: keyof typeof creditType) {
    const target = document.getElementById(`${type}`);

    (this.logoItems ?? []).forEach((item) => {
      item.classList.remove("selected");
    });

    if (target) {
      target.classList.add("selected");
    }
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

const creditSignupInstace = new Credit();
export default creditSignupInstace;
