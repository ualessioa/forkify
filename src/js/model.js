import { async } from "regenerator-runtime";
import { API_KEY, API_URL, RESULTS_PER_PAGE } from "./config.js";
import { AJAX } from "./helpers.js";

export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
    page: 1,
    resultsPerPage: RESULTS_PER_PAGE,
  },
  bookmarks: [],
};

function createRecipeObj(data) {
  //reformatting recipe
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    cookingTime: recipe.cooking_time,
    image: recipe.image_url,
    ingredients: recipe.ingredients,
    publisher: recipe.publisher,
    servings: recipe.servings,
    sourceUrl: recipe.source_url,
    // trick to add a key only to recipes that got it, using shortcircuiting if the first part fails nothign happens, while if the second part is also true it gets destructured in place
    ...(recipe.key && { key: recipe.key }),
  };
}

export async function loadRecipe(id) {
  try {
    const responseJson = await AJAX(`${API_URL}${id}?key=${API_KEY}`);

    state.recipe = createRecipeObj(responseJson);

    // checking if a recipe is already been bookmarked before
    if (state.bookmarks.some((bookmark) => bookmark.id === id)) {
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    }
  } catch (error) {
    throw error;
  }
}

// only manipulating the state, not returning results
export async function loadSearchResults(query) {
  try {
    const data = await AJAX(`${API_URL}?search=${query}&key=${API_KEY}`);
    state.search.query = query;
    state.search.results = data.data.recipes.map((recipe) => {
      return {
        id: recipe.id,
        title: recipe.title,
        image: recipe.image_url,
        publisher: recipe.publisher,
        ...(recipe.key && { key: recipe.key }),
      };
    });
    //bonus alessio code to reset the page of the search results
    state.search.page = 1;
  } catch (error) {
    throw error;
  }
}

// synchronous function to get a part of the data for pagination
export function getSearchResultsPage(page = state.search.page) {
  // if there's an input change the state
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;
  return state.search.results.slice(start, end);
}

export function updateServings(newServings) {
  state.recipe.ingredients.forEach((ingredient) => {
    ingredient.quantity =
      ingredient.quantity * (newServings / state.recipe.servings);
  });

  state.recipe.servings = newServings;
}

//internal function (no need to export) that will make the data persist in the local storage
function persistBookmarks() {
  localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
}

function init() {
  const storage = localStorage.getItem("bookmarks");
  if (storage) state.bookmarks = JSON.parse(storage);
}

export function addBookmark(recipe) {
  // add bookmark
  state.bookmarks.push(recipe);
  // mark current recipe as bookmark
  if (recipe.id === state.recipe.id) {
    state.recipe.bookmarked = true;
  }
  persistBookmarks();
}

export function removeBookmark(id) {
  state.bookmarks.splice(
    state.bookmarks.findIndex((el) => el.id === id),
    1
  );

  if (id === state.recipe.id) state.recipe.bookmarked = false;
  persistBookmarks();
}

export async function uploadRecipe(newRecipe) {
  try {
    //normalizing and formatting the data from the new recipe to be inline with the other recipes
    const ingredients = Object.entries(newRecipe)
      .filter((entry) => entry[0].startsWith("ingredient") && entry[1])
      .map((ing) => {
        const ingArr = ing[1].split(",").map((el) => el.trim);
        if (ingArr.length !== 3)
          throw new Error(`Wrong ingredient format! Please reformat!`);

        const [quantity, unit, description] = ingArr;

        return { quantity: quantity ? +quantity : null, unit, description };
      });

    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };

    const data = await AJAX(`${API_URL}?key=${API_KEY}`, recipe);

    state.recipe = createRecipeObj(data);
    addBookmark(state.recipe);
  } catch (error) {
    throw error;
  }
}

init();
