export class Navbar {
  navbar: HTMLElement | null;
  navButtonWrap: HTMLElement | null;
  navLogoWrap: HTMLElement | null;
  navSerachWrap: HTMLElement | null;
  toggleOnBtn: HTMLElement | null;
  toggleOffBtn: HTMLElement | null;

  constructor(shouldDimOn: boolean = false) {
    this.navbar = document.getElementById("navbar");
    this.navLogoWrap = document.getElementById("nav-logo-warp");
    this.navSerachWrap = document.getElementById("nav-search-warp");
    this.navButtonWrap = document.getElementById("nav-button-warp");
    this.toggleOnBtn = document.getElementById("nav-search-on");
    this.toggleOffBtn = document.getElementById("nav-search-off");
    this.init(shouldDimOn);
  }

  init(shouldDimOn: boolean) {
    this.toggleOnBtn?.addEventListener("click", () => {
      this.hideButtonWrap();
      this.hideLogo();
      this.showSearch();
    });

    this.toggleOffBtn?.addEventListener("click", () => {
      this.showButtonWrap();
      this.showLogo();
      this.hideSearch();
    });

    if (shouldDimOn) {
      window.addEventListener("scroll", (e: Event) => {
        this.dimBackground();
      });
      window.addEventListener("load", (e: Event) => {
        this.dimBackground();
      });
    } else {
      if (this.navbar) {
        this.navbar.style.backgroundColor = "black";
      }
    }
  }

  dimBackground() {
    if (this.navbar) {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const dimOpacity = scrollTop / (this.navbar.clientHeight * 5);
      this.navbar.style.backgroundColor = `rgba(0, 0, 0, ${
        dimOpacity > 1 ? "1" : dimOpacity
      })`;
    }
  }

  hideLogo() {
    this.navLogoWrap?.classList.add("d-none");
  }

  showLogo() {
    this.navLogoWrap?.classList.remove("d-none");
  }

  hideSearch() {
    this.navSerachWrap?.classList.remove("d-block");
    this.navSerachWrap?.classList.add("d-none");
  }

  showSearch() {
    this.navSerachWrap?.classList.remove("d-none");
    this.navSerachWrap?.classList.add("d-block");
  }

  hideButtonWrap() {
    this.navButtonWrap?.classList.remove("d-flex");
    this.navButtonWrap?.classList.add("d-none");
  }

  showButtonWrap() {
    this.navButtonWrap?.classList.remove("d-none");
    this.navButtonWrap?.classList.add("d-flex");
  }
}

export default Navbar;
