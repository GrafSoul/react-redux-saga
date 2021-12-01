/* eslint-disable indent */
import { SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } from '../actions/types';
const initialSate = {
    loading: false,
    alert: '',
};

// Pure Function
export const app = (state = initialSate, action) => {
    const { type, payload } = action;

    switch (type) {
        case SHOW_LOADER:
            return { ...state, loading: true };

        case HIDE_LOADER:
            return { ...state, loading: false };

        case SHOW_ALERT:
            return { ...state, alert: payload };

        case HIDE_ALERT:
            return { ...state, alert: null };

        default:
            return state;
    }
};
