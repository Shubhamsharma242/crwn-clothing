import { takeLatest, all, call, put } from "redux-saga/effects";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
  createAuthWithEmailAndPassword,
  SignOutUser,
} from "../../utils/firebase/firebase.utils";
import { USER_ACTION_TYPES } from "./user.types";
import {
  signInFailed,
  signInSuccess,
  signOutSucess,
  signUpFailed,
  signUpSuccess,
  signOutFailed,
} from "./user.action";

function* getSnapshotFromUserAuth(userAuth, additionInformation) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionInformation
    );
    // console.log(userSnapshot,"======",userSnapshot.data())
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

function* signOut() {
  try {
    yield call(SignOutUser);
    yield put(signOutSucess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthWithEmailAndPassword,
      email,
      password
    );
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

function* signInWithEmail({ payload }) {
  try {
    const { email, password } = payload;
    const { user } = yield call(
      signInAuthWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    console.log(user);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();

    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}
export function* signInAfterSignUp({
  payload: { user, additionalCredentials },
}) {
  yield call(getSnapshotFromUserAuth, user, additionalCredentials);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}
export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
