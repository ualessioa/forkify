import View from "./View.js";
import previewView from "./previewView.js";

// importing icons from main folder to dist folder
import icons from "url:../../img/icons.svg";

class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage = `Sorry, we couldn't find any recipe for your query, try another one!`;
  _successMessage = ``;

  _generateMarkup() {
    return (
      this._data
        // added logic to add the active class to the selected result
        .map((result) => previewView.render(result, false))
        .join("")
    );
  }
}

export default new ResultsView();
