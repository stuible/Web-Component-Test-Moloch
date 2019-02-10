customElements.define(
    "moloch-phrase",
    class extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            this.innerHTML =
                "Moloch, Moloch, Nightmare of Moloch";
        }
    }
);