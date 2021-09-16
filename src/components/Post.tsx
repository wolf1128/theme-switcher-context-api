import React from 'react';
import { Card } from 'react-bootstrap';

interface PostProps {
    post: {
        title: string;
        description: string;
    }
}

const Post = ({ post }: PostProps) => {
    return (
        <Card className='mt-3'>
            <Card.Header as="h5">New Post</Card.Header>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                    {post.description}
                </Card.Text>
            </Card.Body>
        </Card> 
    )
}

export default Post
