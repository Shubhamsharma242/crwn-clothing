import {
  createAction,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.util";
import { CATEGORIES_ACTION_TYPES, category } from "./category.types";

export type FatchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FATECH_CATEGORIES_START>;

export type FatchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FATECH_CATEGORIES_SUCCESS,
  category[]
>;
export type FatchCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FATECH_CATEGORIES_FAILED,
  Error
>;

export type CategoryAction =
  | FatchCategoriesStart
  | FatchCategoriesSuccess
  | FatchCategoriesFailed;
  
export const fatchCategoriesStart = (): FatchCategoriesStart =>
  createAction(CATEGORIES_ACTION_TYPES.FATECH_CATEGORIES_START);

export const fatchCategoriesSuccess = (
  categoriesArray: category[]
): FatchCategoriesSuccess =>
  createAction(
    CATEGORIES_ACTION_TYPES.FATECH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fatchCategoriesFailed = (error: Error): FatchCategoriesFailed =>
  createAction(CATEGORIES_ACTION_TYPES.FATECH_CATEGORIES_FAILED, error);
