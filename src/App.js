import React from 'react';
import PostsFotm from './components/PostsForm';
import Posts from './components/Posts';
import FetchedPosts from './components/FetchedPosts';

function App() {
    return (
        <div className="container pt-3">
            <div className="row">
                <div className="col">
                    <PostsFotm />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2 className="mb-5">Synchronous posts</h2>
                    <Posts />
                </div>
                <div className="col">
                    <h2 className="mb-5">Asynchronous posts</h2>
                    <FetchedPosts />
                </div>
            </div>
        </div>
    );
}

export default App;
