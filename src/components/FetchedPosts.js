import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchedPosts } from '../store/actions/actions';

import Post from './Post';
import Loader from './Loader';

const FetchedPosts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.fetchedPosts);
    const loading = useSelector((state) => state.app.loading);

    if (loading) {
        return <Loader />;
    }

    if (posts.length === 0) {
        return (
            <button className="btn btn-primary" onClick={() => dispatch(fetchedPosts())}>
                Upload Posts
            </button>
        );
    }
    return posts.map((post, index) => <Post key={index} post={post} />);
};

export default FetchedPosts;
