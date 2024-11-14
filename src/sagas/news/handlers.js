import { call, put, select } from "redux-saga/effects";
import requestGetNews from "./requests";
import { setLoading, setNews } from "./newsSlice";

export default function* handleGetNew({ payload, type }) {
  let query = "";
  try {
    const newQuery = yield select((state) => state.new.query);
    if (newQuery === "") query = "react";
    else query = payload;
    yield put(setLoading(true));
    const response = yield call(requestGetNews, query);
    const { hits } = response.data;
    yield put(setNews(hits));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
  }
}
