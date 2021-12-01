import React from 'react';

import { connect } from 'react-redux';
import { createPost, showAlert } from '../store/actions/actions';

import Alert from './Alert';

class Postsform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { title } = this.state;

        if (!title.trim()) {
            return this.props.showAlert('The title of the post cannot be empty!');
        }

        const newPost = {
            title,
            id: Date.now().toString(),
        };

        this.props.createPost(newPost);
        this.setState((prev) => ({
            ...prev,
            title: '',
        }));
    };

    handleChangeInput = (event) => {
        event.persist();
        this.setState((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="mb-5">
                {this.props.alert && <Alert text={this.props.alert} />}
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Post title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={this.state.value}
                        onChange={this.handleChangeInput}
                    />
                </div>
                <button type="submit" className="btn btn-success">
                    Create
                </button>
            </form>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        alert: state.app.alert,
    };
};

const mapDispathToProps = {
    createPost,
    showAlert,
};

export default connect(mapStateToProps, mapDispathToProps)(Postsform);
