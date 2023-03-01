//importing everything in the model as model
import * as model from "./model.js";

// import the views
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import paginationView from "./views/paginationView.js";
import bookmarksView from "./views/bookmarksView.js";
import addRecipeView from "./views/addRecipeView.js";
import { MODAL_CLOSE_SEC } from "./config.js";

// importing core-js and polyfilling and fractional libraries
import "core-js/stable";
import "regenerator-runtime/runtime";

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

//implementing the publisher-subscriber pattern
// here the subscriber part
function init() {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerCLick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
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

    // // update results view to insert active link
    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);

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
  // moving from rerendering the whole container to rerendering only the content that changes for better performance
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
}

function controlAddBookmark() {
  // add or remove bookmark
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } else {
    model.removeBookmark(model.state.recipe.id);
  }
  // update recipe view
  recipeView.update(model.state.recipe);

  // render bookmarks
  bookmarksView.render(model.state.bookmarks);
}

function controlBookmarks() {
  bookmarksView.render(model.state.bookmarks);
}

async function controlAddRecipe(newRecipe) {
  try {
    addRecipeView.renderSpinner();
    await model.uploadRecipe(newRecipe);
    recipeView.render(model.state.recipe);
    bookmarksView.render(model.state.bookmarks);

    //changing id in url
    window.history.pushState(null, "", `#${model.state.recipe.id}`);
    addRecipeView.renderMessage();
    setTimeout(() => {
      addRecipeView.hideModal();
      setTimeout(() => {
        // bonus alessio code to reset the form after one immission
        addRecipeView.render();
      }, 1000);
    }, MODAL_CLOSE_SEC * 1000);
  } catch (error) {
    addRecipeView.renderError(error.message);
  }
}

// reloads localhost page with changes automatically to be deleted
if (module.hot) {
  module.hot.accept();
}
