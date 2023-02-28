//importing everything in the model as model
import * as model from "./model.js";

// import the views
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";

// importing core-js and polyfilling and fractional libraries
import "core-js/stable";
import "regenerator-runtime/runtime";

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

//implementing the publisher-subscriber pattern
// here the subscriber part
function init() {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}
init();

// publisher-subscriber pattern also here
async function controlSearchResults() {
  try {
    // insert the loading spinner
    resultsView.renderSpinner();

    // get the search query
    const query = searchView.getQuery();
    if (!query) return;

    //load search results
    await model.loadSearchResults(query);

    // render search results with pagination
    resultsView.render(model.getSearchResultsPage());
  } catch (error) {
    console.error(error);
  }
}

async function controlRecipes() {
  try {
    //we get the id from the url to insert it in the fetch function
    const id = window.location.hash;

    // guard clause to prevent error when loading the page without an id
    if (!id) return;

    //render spinner
    recipeView.renderSpinner();

    //loading the recipe using the model
    await model.loadRecipe(id.slice(2));
    const recipe = await model.state.recipe;

    //rendering recipe
    recipeView.render(recipe);
  } catch (error) {
    recipeView.renderError();
  }
}

// reloads localhost page with changes automatically to be deleted
if (module.hot) {
  module.hot.accept();
}
