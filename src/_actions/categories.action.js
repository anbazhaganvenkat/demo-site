import { categoriesConstants } from "../_constants";
import { categoriesService } from "../_services";

export const categoriesActions = {
  getAll,
};

function getAll(name) {
  return (dispatch) => {
    dispatch(request());

    categoriesService.getAll(name).then(
      (categories) => dispatch(success(categories)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: categoriesConstants.GETALL_REQUEST };
  }
  function success(categories) {
    return { type: categoriesConstants.GETALL_SUCCESS, categories };
  }
  function failure(error) {
    return { type: categoriesConstants.GETALL_FAILURE, error };
  }
}
