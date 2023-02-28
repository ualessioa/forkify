import View from "./View.js";

class SearchView extends View {
  _parentElement = document.querySelector(".search");

  //getting the searched value to the controller
  getQuery() {
    const value = this._parentElement.querySelector(".search__field").value;
    this._clearInput();
    return value;
  }

  //event listener
  addHandlerSearch(handlerfn) {
    this._parentElement.addEventListener("submit", function (e) {
      // additional code to prevent reloading of the page when submitting
      e.preventDefault();
      handlerfn();
    });
  }

  //clearing the input field
  _clearInput() {
    this._parentElement.querySelector(".search__field").value = "";
  }
}

export default new SearchView();
