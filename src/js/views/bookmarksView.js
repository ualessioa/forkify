import View from "./View.js";

// importing icons from main folder to dist folder
import icons from "url:../../img/icons.svg";
import previewView from "./previewView.js";

class BookmarksView extends View {
  _parentElement = document.querySelector(".bookmarks__list");
  _errorMessage = `No bookmarks yet. Find a nice recipe and bookmark it :)`;
  _successMessage = ``;

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    return (
      this._data
        // added logic to add the active class to the selected result
        .map((bookmark) => previewView.render(bookmark, false))
        .join("")
    );
  }
}

export default new BookmarksView();
