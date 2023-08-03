import { createAction } from "../../utils/reducer/reducer.util";
import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

const fatchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FATECH_CATEGORIES_START);

const fatchCategoriesSuccess = (categoriesArray) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FATECH_CATEGORIES_SUCCESS,
    categoriesArray
  );

const fatchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FATECH_CATEGORIES_FAILED, error);

export const fatchCategoriesAsync = () => async (dispatch) => {
  dispatch(fatchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndDocuments();
    dispatch(fatchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fatchCategoriesFailed(error));
  }
};
