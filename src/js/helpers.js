export const getJSON = async function (url) {
  try {
    const response = await fetch(url);
    const responseJson = await response.json();

    // throwing an error for 400 errors in the fetch
    if (!response.ok) throw new Error(responseJson.message);

    return responseJson;
  } catch (error) {
    throw error;
  }
};
