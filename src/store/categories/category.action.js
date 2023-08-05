import { createAction } from "../../utils/reducer/reducer.util";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const fatchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FATECH_CATEGORIES_START);

export const fatchCategoriesSuccess = (categoriesArray) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FATECH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fatchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FATECH_CATEGORIES_FAILED, error);
