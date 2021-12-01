import { takeEvery, put, call } from 'redux-saga/effects';
import { hideLoader, showLoader, showAlert } from '../actions/actions';
import { FETCH_POSTS, REQUEST_POSTS } from '../actions/types';

export function* sagaWather() {
    yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
    try {
        yield put(showLoader());
        const payload = yield call(fetchePosts);
        yield put({ type: FETCH_POSTS, payload });
        yield put(hideLoader());
    } catch (error) {
        yield put(showAlert('Something went wrong!'));
        yield put(hideLoader());
    }
}

async function fetchePosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=5');
    return await response.json();
}
