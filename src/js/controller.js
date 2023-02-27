//importing everything in the model as model
import * as model from "./model.js";

// import the view from recipeView.js
import recipeView from "./views/recipeView.js";

// importing core-js and polyfilling and fractional libraries
import "core-js/stable";
import "regenerator-runtime/runtime";

const recipeContainer = document.querySelector(".recipe");

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
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
    console.error(error);
  }
}

// //listen to hashchange
// window.addEventListener("hashchange", controlRecipes);
// //listen to page loading
// window.addEventListener("load", controlRecipes);

//as opposed to adding event listeners one by one we can have a list of events and loop them over
["hashchange", "load"].forEach((event) => {
  window.addEventListener(event, controlRecipes);
});

// reloads localhost page with changes automatically
if (module.hot) {
  module.hot.accept();
}
