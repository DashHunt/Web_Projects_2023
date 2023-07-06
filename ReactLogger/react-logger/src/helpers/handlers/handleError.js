// @ PackageInfo:         Package comes with handleError function
// @ Description:         handleError function responsible for handling errors and logging to server
// @ Params:              error (object)
// @ Usage:               In your "catches" (try-catch/ fetch catch) add this function as shown below in the Example

// Example:

//  function error() {
//      const message = "Hello";
//
//      try {
//        message = "Ola"
//      } catch (error) {
//        handleError(error)
//      }
//  }

export default function handleError(error) {
  if (!error) {
    throw new Error("Handle Error function: Error is empty or undefined");
  }

  const url = new URL(document.location.href);

  if (!url) {
    throw new Error("Handle Error function: URL not found");
  }

  let data;
  console.log(error);

  if (error.message.includes("Request")) {
    data = {
      requestError: error.message,
      type: "API Consumption Error",
      apiUrl: error.config.url,
      location: url.pathname,
    };
  } else {
    data = {
      requestError: error.message,
      type: "Runtime error",
      apiUrl: null,
      location: url.pathname,
    };
  }

  // Fetch to api to log data :D
  console.log(data);
}
