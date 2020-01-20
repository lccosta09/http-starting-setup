import React, {Component} from 'react';
import Post from '../Post/Post';
import axios from '../../../axios/instance';
import './Posts.css';
import {Link} from 'react-router-dom';

class Posts extends Component {

    state = {
        posts: [],
    };

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4).map(post => {
                    return {
                        ...post,
                        author: 'Leandro'
                    }
                });

                this.setState({posts});
            })
            .catch(error => {
                // this.setState({error: true});
            });
    }

    setSelectedPostIdHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render() {
        const posts = this.state.error ? 'Something went wrong' : this.state.posts.map(post => {
            return (
                <Link key={post.id} to={`/${post.id}`}>
                    <Post 
                        title={post.title}
                        author={post.author}
                        clicked={() => this.setSelectedPostIdHandler(post.id)}
                    />
                </Link>
            );
        }); 

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;