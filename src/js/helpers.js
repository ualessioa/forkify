import { TIMEOUT_SEC } from "./config.js";

// timeout function to make the promise reject after a set amount of time, we will race timeout and getJSON to have the first result between them
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export async function AJAX(url, uploadData = undefined) {
  try {
    const response = await Promise.race([
      uploadData
        ? fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(uploadData),
          })
        : fetch(url),
      timeout(TIMEOUT_SEC),
    ]);
    const responseJson = await response.json();

    // throwing an error for 400 errors in the fetch
    if (!response.ok) throw new Error(responseJson.message);

    return responseJson;
  } catch (error) {
    throw error;
  }
}

// export const getJSON = async function (url) {
//   try {
//     const response = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
//     const responseJson = await response.json();

//     // throwing an error for 400 errors in the fetch
//     if (!response.ok) throw new Error(responseJson.message);

//     return responseJson;
//   } catch (error) {
//     throw error;
//   }
// };

// export const sendJSON = async function (url, uploadData) {
//   try {
//     const response = await Promise.race([
//       uploadData
//         ? fetch(url, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(uploadData),
//           })
//         : fetch(url),
//       timeout(TIMEOUT_SEC),
//     ]);
//     const responseJson = await response.json();

//     // throwing an error for 400 errors in the fetch
//     if (!response.ok) throw new Error(responseJson.message);

//     return responseJson;
//   } catch (error) {
//     throw error;
//   }
// };
