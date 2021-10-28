import { categoriesConstants } from "../_constants";

export function categories(state = {}, action) {
  switch (action.type) {
    case categoriesConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case categoriesConstants.GETALL_SUCCESS:
      return {
        items: action.categories,
      };
    case categoriesConstants.GETALL_FAILURE:
      return {
        error: action.error,
      };

    default:
      return state;
  }
}
