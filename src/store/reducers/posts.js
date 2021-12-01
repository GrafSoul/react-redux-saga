/* eslint-disable indent */
import { CREATE_POST, FETCH_POSTS } from '../actions/types';

const initialSate = {
    posts: [],
    fetchedPosts: [],
};

// Pure Function
export const posts = (state = initialSate, action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_POST:
            return { ...state, posts: state.posts.concat([payload]) };
        // return { ...state, posts: [...state.posts, payload] };

        case FETCH_POSTS:
            return { ...state, fetchedPosts: payload };

        default:
            return state;
    }
};
