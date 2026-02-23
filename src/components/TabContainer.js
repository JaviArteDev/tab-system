export class TabContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.setupTabs();
  }

  setupTabs() {
    const buttons = this.querySelectorAll('button');
    const sections = this.querySelectorAll('section');

    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => btn.removeAttribute('active'));
        sections.forEach(sec => sec.hidden = true);

        button.setAttribute('active', '');
        sections[index].hidden = false;
      });
    });

    if (buttons.length > 0 && sections.length > 0) {
      buttons[0].setAttribute('active', '');
      for (let i = 1; i < sections.length; i++) {
        sections[i].hidden = true;
      }
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        ::slotted(button) {
          padding: 8px 16px;
          border: none;
          background: #f0f0f0;
          cursor: pointer;
          border-radius: 4px 4px 0 0;
        }
        ::slotted(button[active]) {
          background: #e0e0e0;
          font-weight: bold;
        }
        ::slotted(section) {
          padding: 16px;
          border: 1px solid #e0e0e0;
          border-radius: 0 0 4px 4px;
        }
      </style>
      <slot></slot>
    `;
  }
}

customElements.define('tab-container', TabContainer);
