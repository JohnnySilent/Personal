// All custom elemtents Must "extend HTMLElement"
class MyComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<h1>Hello world</h1>`;
    }
  }
  customElements.define('my-component', MyComponent);

customElements.define('word-count', WordCount, { extends: 'p'})

// const template = document.querySelector('template');
// const node = document.importNode(template.content, true);
// document.body.appendChild(node);