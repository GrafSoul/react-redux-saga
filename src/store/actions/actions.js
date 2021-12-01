import {
    CREATE_POST,
    FETCH_POSTS,
    SHOW_LOADER,
    HIDE_LOADER,
    SHOW_ALERT,
    HIDE_ALERT,
} from './types';

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post,
    };
}

export function showLoader() {
    return {
        type: SHOW_LOADER,
    };
}

export function hideLoader() {
    return {
        type: HIDE_LOADER,
    };
}

export function showAlert(text) {
    return (dispath) => {
        dispath({ type: SHOW_ALERT, payload: text });

        setTimeout(() => {
            dispath(hideAlert());
        }, 3000);
    };
}

export function hideAlert() {
    return {
        type: HIDE_ALERT,
    };
}

export function fetchedPosts() {
    return async (dispath) => {
        try {
            dispath(showLoader());
            const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=5');
            const json = await response.json();
            dispath({
                type: FETCH_POSTS,
                payload: json,
            });
            dispath(hideLoader());
        } catch (e) {
            dispath(showAlert('Something went wrong!'));
            dispath(hideLoader());
        }
    };
}
