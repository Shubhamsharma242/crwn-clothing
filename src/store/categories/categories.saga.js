import { all, put, call, takeLatest } from "redux-saga/effects";
import {
  fatchCategoriesSuccess,
  fatchCategoriesFailed,
} from "./category.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

function* fatchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments);
    yield put(fatchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fatchCategoriesFailed(error));
  }
}

export function* onFatchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FATECH_CATEGORIES_START,
    fatchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFatchCategories)]);
}
