export const state = {
  recipe: {},
};

export async function loadRecipe(id) {
  try {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id.slice(1)} `
    );
    const responseJson = await response.json();
    // throwing an error for 400 errors in the fetch
    if (!response.ok) throw new Error(responseJson.message);

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
