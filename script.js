customElements.define(
    "moloch-phrase",
    class extends HTMLElement {
        constructor() {
            super();
            
        }

        connectedCallback() {
            const template = document.getElementById('moloch-phrase-template');
            this.innerHTML = template.innerHTML;
        }
    }
);