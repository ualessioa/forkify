// importing icons from main folder to dist folder
import icons from "url:../../img/icons.svg";

export default class View {
  _data;

  // since render will be generic we have another private method to generate the html
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;

    this.clearContainer();
    //inserting html with data in container
    this._parentElement.insertAdjacentHTML(
      "afterbegin",
      this._generateMarkup()
    );
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
