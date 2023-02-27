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
async function showRecipe() {
  try {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcc3e `
    );
    const responseJson = await response.json();
    // throwing an error for 400 errors in the fetch
    if (!response.ok) throw new Error(responseJson.message);

    //reformatting recipe
    let { recipe } = responseJson.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      cookingTime: recipe.cooking_time,
      image: recipe.image_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      servings: recipe.servings,
      sourceUrl: recipe.source_url,
    };
    console.log(recipe);
  } catch (error) {
    alert(error);
  }
}

showRecipe();
