// importing icons from main folder to dist folder
import icons from "url:../../img/icons.svg";

export default class View {
  _data;

  update(data) {
    this._data = data;

    const newMarkup = this._generateMarkup();
    //The Range.createContextualFragment() method returns a DocumentFragment by invoking the HTML fragment parsing algorithm or the XML fragment parsing algorithm with the start of the range (the parent of the selected node) as the context node. The HTML fragment parsing algorithm is used if the range belongs to a Document whose HTMLness bit is set. In the HTML case, if the context node would be html, for historical reasons the fragment parsing algorithm is invoked with body as the context instead.
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    // selecting every element in the document fragment to get back a node list
    const newElements = Array.from(newDOM.querySelectorAll("*"));
    const currElements = Array.from(this._parentElement.querySelectorAll("*"));

    newElements.forEach((newEl, i) => {
      const currEl = currElements[i];
      // we check if there are any differences in the nodes and check if the element nodeValue contains actual text, so that we only change the nodes with text values
      if (
        !newEl.isEqualNode(currEl) &&
        newEl.firstChild?.nodeValue.trim() !== ""
      ) {
        // changing only text
        currEl.textContent = newEl.textContent;
      }

      // we also need to change the dataset attributes of the buttons
      if (!newEl.isEqualNode(currEl)) {
        //we get an array from the nodelist of every element that changes and we loop over the array setting the attributes from the corresponding new element
        Array.from(newEl.attributes).forEach((attr) => {
          currEl.setAttribute(attr.name, attr.value);
        });
      }
    });
  }

  // since render will be generic we have another private method to generate the html
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this.clearContainer();
    //inserting html with data in container
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  //clearing the container
  clearContainer() {
    this._parentElement.innerHTML = "";
  }
  // render loading spinner
  renderSpinner() {
    const html = `<div class="spinner">
  <svg>
    <use href="${icons}#icon-loader"></use>
  </svg>
</div>`;
    this.clearContainer();

    this._parentElement.insertAdjacentHTML("afterbegin", html);
  }

  renderMessage(message = this._successMessage) {
    const markup = `<div class="recipe">
    <div class="message">
      <div>
        <svg>
          <use href="${icons}#icon-smile"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>`;

    this.clearContainer();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `<div class="error">
    <div>
      <svg>
        <use href="${icons}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div>`;

    this.clearContainer();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
