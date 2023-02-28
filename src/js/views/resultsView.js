import View from "./View.js";

// importing icons from main folder to dist folder
import icons from "url:../../img/icons.svg";

class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage = `Sorry, we couldn't find any recipe for your query, try another one!`;
  _successMessage = ``;

  _generateMarkup() {
    const markup = this._data
      .map((result) => {
        return `<li class="preview">
    <a class="preview__link" href="#${result.id}">
      <figure class="preview__fig">
        <img src="${result.image}" alt="${result.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${result.title}</h4>
        <p class="preview__publisher">${result.publisher}</p>
      </div>
    </a>
  </li>`;
      })
      .join("");

    return markup;
  }
}

export default new ResultsView();
