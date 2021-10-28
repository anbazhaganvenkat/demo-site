import { authHeader } from "../_helpers";
const API = process.env.REACT_APP_API_PATH;

export const categoriesService = {
  getAll,
};

function getAll(name) {
  if (name) {
    const requestOptions = {
      method: "GET",
    };

    return fetch(`${API}/json/v1/1/filter.php?c=${name}`, requestOptions).then(
      handleResponse
    );
  } else {
    const requestOptions = {
      method: "GET",
    };

    return fetch(`${API}/json/v1/1/categories.php`, requestOptions).then(
      handleResponse
    );
  }
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
