import View from "./View.js";

// importing icons from main folder to dist folder
import icons from "url:../../img/icons.svg";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  // publisher function to handle clicks on buttons
  addHandlerCLick(handler) {
    //event delegation to listen on both buttons
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");
      if (!btn) return;

      const goToPage = Number(btn.dataset.goto);
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // different display logic for different scenarios

    //Page 1, and there are other pages
    if (currPage === 1 && numPages > 1) {
      return `<button data-goto="${
        currPage + 1
      }" class="btn--inline pagination__btn--next">
      <span>Page ${currPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;
    }

    //last page
    if (currPage === numPages) {
      return `
        <button data-goto="${
          currPage - 1
        }" type="button" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currPage - 1}</span>
          </button>
        `;
    }

    // x page
    if (currPage > 1 && currPage < numPages) {
      return `
      <button data-goto="${
        currPage + 1
      }" class="btn--inline pagination__btn--next">
        <span>Page ${currPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
      <button data-goto="${
        currPage - 1
      }" type="button" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currPage - 1}</span>
        </button>
      `;
    }

    //Page 1, and there are no other pages
    return "";
  }
}

export default new PaginationView();
