//importing everything in the model as model
import * as model from "./model.js";

// import the views
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import paginationView from "./views/paginationView.js";

// importing core-js and polyfilling and fractional libraries
import "core-js/stable";
import "regenerator-runtime/runtime";
import { getJSON } from "./helpers.js";

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

//implementing the publisher-subscriber pattern
// here the subscriber part
function init() {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerCLick(controlPagination);
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

    // render search results
    resultsView.render(model.getSearchResultsPage());

    //bonus alessio code to reset the page of the search results
    model.state.search.page = 1;

    //rendering initial pagination for results
    paginationView.render(model.state.search);
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
    await model.loadRecipe(id.slice(1));
    const recipe = await model.state.recipe;

    //rendering recipe
    recipeView.render(recipe);
  } catch (error) {
    recipeView.renderError();
  }
}

function controlPagination(goToPage) {
  // re render results and buttons after click on pagination button
  resultsView.render(model.getSearchResultsPage(goToPage));
  paginationView.render(model.state.search);
}

function controlServings(newServings) {
  // update the recipe servings (in the state)
  model.updateServings(newServings);
  // update the recipe view
  recipeView.render(model.state.recipe);
}

// reloads localhost page with changes automatically to be deleted
if (module.hot) {
  module.hot.accept();
}
