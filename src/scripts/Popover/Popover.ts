import * as bootstrap from "bootstrap";

// Enable Popover
export class Popover {
  constructor() {
    this.init();
  }
  init() {
    this.addPopoverContent();
    this.addOverlayContent();
  }
  getContent = () => {
    return `
          <div class="movie-summary">
            <h3>Mission: Impossible - Ghost Protocol</h3>
            <p>
              <span class="me-1">2011</span>
              <span class="border p-1 me-1">PG-13</span>
              <span>2h 13m</span>
            </p>
            <p>
              Super-agent Ethan Hunt dangles from skyscrapers and otherwise takes
              daring to new heights on another operation from the Impossible
              Missions Force. Helping Hunt get the job done is droll fellow IMF
              agent Luther Stickel.
            </p>
            <div class="px-3">
              <div class="mb-1 row g-2">
                <span class="col-3 fw-bold text-end">Starring:</span>
                <span class="col-9">
                  <a>Tom Cruise,</a>
                  <a>Jeremy Renner</a>
                </span>
              </div>
              <div class="mb-1 row g-2">
                <span class="col-3 fw-bold text-end">Director:</span>
                <span class="col-9">
                  <a href="/RoleDisplay/Brad-Bird/20002695">Brad Bird</a>
                </span>
              </div>
              <div class="mb-1 row g-2">
                <span class="col-3 fw-bold text-end">Genre:</span>
                <span class="col-9">
                  <a href="/Genre/Action-Adventure/296"
                    >Action &amp; Adventure,
                  </a>
                  <a href="/Genre/Action-Thrillers/618">Action Thrillers</a>
                </span>
              </div>
              <div class="mb-1 row g-2">
                <span class="col-3 fw-bold text-end">Format:</span>
                <span class="col-9">
                  <span class="formatItem selected">Blu-ray</span>
                  <span class="divider">,</span>
                  <span class="formatItem">DVD</span>
                </span>
              </div>
            </div>
            <p class="border my-3"></p>
            <p class="mb-0">
              <span>Average of 3,560,134 ratings: 3.9 stars</span>
            </p>
          </div>
              `;
  };

  addPopoverContent() {
    const popoverTriggerList = document.querySelectorAll(
      '[data-bs-toggle="popover"]'
    );

    const popoverList = [...popoverTriggerList].map((popoverTriggerEl) => {
      const popover = new bootstrap.Popover(popoverTriggerEl, {
        trigger: "hover focus",
        content: this.getContent(),
        html: true,
        delay: {
          hide: 0,
          show: 1000,
        },
      });
      return popover;
    });
  }

  computeOverlayContent = () => {
    return `
        <div class="overlay-info">
            <div class="overlay-content">
            <div
                class="row g-0 mb-2 align-items-center justify-content-center"
            >
                <div class="star-wrap small mb-md-0" data-user-rate="3.7">
                <div class="star-base">
                    <i class="bi bi-star-fill" data-rate-value="5"></i>
                    <i class="bi bi-star-fill" data-rate-value="4"></i>
                    <i class="bi bi-star-fill" data-rate-value="3"></i>
                    <i class="bi bi-star-fill" data-rate-value="2"></i>
                    <i class="bi bi-star-fill" data-rate-value="1"></i>
                </div>
                <div class="star-mask">
                    <div class="star-rate">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    </div>
                </div>
                </div>
                <div class="col-auto not-interested ms-2">
                <i class="bi bi-x-circle"></i>
                </div>
            </div>
            <div class="row g-2">
                <div class="col-6">
                <button
                    class="btn btn-success w-100"
                    data-movieid="81183713"
                    data-bs-toggle="modal" 
                    data-bs-target="#queue-modal" 
                >
                    Add
                </button>
                </div>
                <div class="col-6">
                <button
                    class="btn btn-outline-light w-100"
                    data-id="81183713"
                >
                    trailer
                </button>
                </div>
            </div>
            </div>
        </div>
        `;
  };

  addOverlayContent() {
    // Add Overlay Info
    const overlayRootList = document.querySelectorAll(
      '[data-dvd-toggle="overlay-info"]'
    );

    [...overlayRootList].forEach((root) => {
      const tempContainer = document.createElement("div");
      tempContainer.innerHTML = this.computeOverlayContent();
      while (tempContainer.firstChild) {
        root.appendChild(tempContainer.firstChild);
      }
    });
  }
}

export default Popover;
