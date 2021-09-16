import React from 'react';
import { Card } from 'react-bootstrap';
import { themeContext } from '../context/themeContext';

interface PostProps {
    post: {
        title: string;
        description: string;
    }
}

const Post = ({ post }: PostProps) => {
    const { currentTheme } = React.useContext(themeContext);

    return (
        <Card className='m-4' bg={currentTheme === 'light' ? 'light' : 'secondary'}>
            <Card.Header as="h5" style={{ color: currentTheme === 'light' ? '#000' : '#fff' }}>New Post</Card.Header>
            <Card.Body>
                <Card.Title style={{ color: currentTheme === 'light' ? '#000' : '#fff' }}>{post.title}</Card.Title>
                <Card.Text style={{ color: currentTheme === 'light' ? '#000' : '#fff' }}>
                    {post.description}
                </Card.Text>
            </Card.Body>
        </Card> 
    )
}

export default Post
