import { async } from "regenerator-runtime";
import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";

export const state = {
  recipe: {},
};

export async function loadRecipe(id) {
  try {
    const responseJson = await getJSON(API_URL + id);
    //reformatting recipe
    const { recipe } = responseJson.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      cookingTime: recipe.cooking_time,
      image: recipe.image_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      servings: recipe.servings,
      sourceUrl: recipe.source_url,
    };
  } catch (error) {
    console.error(error);
  }
}
