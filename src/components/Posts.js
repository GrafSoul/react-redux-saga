import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

const Posts = ({ syncPosts }) => {
    if (!syncPosts.length) {
        return <p className="text-center">There are no posts yet</p>;
    }
    return syncPosts.length && syncPosts.map((post, index) => <Post key={index} post={post} />);
};

const mapStateToProps = (state) => {
    return {
        syncPosts: state.posts.posts,
        fatchedPosts: state.posts.fatchedPosts,
    };
};

export default connect(mapStateToProps, null)(Posts);
