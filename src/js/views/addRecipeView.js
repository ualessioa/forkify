import View from "./View.js";

// importing icons from main folder to dist folder
import icons from "url:../../img/icons.svg";

class addRecipeView extends View {
  _parentElement = document.querySelector(".upload");
  _successMessage = `Recipe was succesfully uploaded`;
  _window = document.querySelector(".add-recipe-window");
  _overlay = document.querySelector(".overlay");
  _btnOpen = document.querySelector(".nav__btn--add-recipe");
  _btnClose = document.querySelector(".btn--close-modal");
  _defaultHTML = this._parentElement.innerHTML;

  constructor() {
    super();

    this._addHandlerShowWindow();
  }

  render() {
    this._parentElement.innerHTML = this._defaultHTML;
  }

  hideModal() {
    this._overlay.classList.add("hidden");
    this._window.classList.add("hidden");
  }

  _addHandlerShowWindow() {
    [this._btnOpen, this._btnClose, this._overlay].forEach((element) => {
      element.addEventListener("click", () => {
        this._overlay.classList.toggle("hidden");
        this._window.classList.toggle("hidden");
      });
    });
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      // we use form data to get the contents of the forms without passing through every single item, we pass this to formdata because in an handler function the this points to the element on which we are listening
      const data = [...new FormData(this)];
      // we convert the array we recieved to an object cause that is usually what we use for recipes
      const dataObj = Object.fromEntries(data);
      handler(dataObj);
    });
  }

  _generateMarkup() {}
}

export default new addRecipeView();
