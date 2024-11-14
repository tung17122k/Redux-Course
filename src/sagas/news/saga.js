import { takeLatest } from "redux-saga/effects";
import { getNews } from "./newsSlice";
import handleGetNew from "./handlers";

function* newsSaga() {
  yield takeLatest(getNews.type, handleGetNew);
}

export default newsSaga;
