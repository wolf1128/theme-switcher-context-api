import React from 'react';
import Post from './Post';

interface PostsProps {
    posts: { 
        title: string;
        description: string;
    }[];
}

const Posts = ({ posts }: PostsProps) => {
    return (
        <div>
            <h3> Posts </h3>
            {posts.map(post => (
                <Post post={post} />
            ))}
        </div>
    )
}

export default Posts
