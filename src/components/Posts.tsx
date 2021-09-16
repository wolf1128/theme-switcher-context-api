import React from 'react';
import { themeContext } from '../context/themeContext';
import Post from './Post';

interface PostsProps {
    posts: { 
        title: string;
        description: string;
    }[];
}

const Posts = ({ posts }: PostsProps) => {
    const { currentTheme } = React.useContext(themeContext);

    return (
        <div>
            <h3 className='mt-3' style={{ color: currentTheme === 'light' ? '#000' : '#fff' }}> Posts </h3>
            {posts.map(post => (
                <Post key={post.title} post={post} />
            ))}
        </div>
    )
}

export default Posts
