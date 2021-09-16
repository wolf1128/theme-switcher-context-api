import React from 'react';
import { Card } from 'react-bootstrap';


const Post = () => {
    return (
        <Card className='mt-3'>
            <Card.Header as="h5">New Post</Card.Header>
            <Card.Body>
                <Card.Title>Post Title</Card.Title>
                <Card.Text>
                    Post Description
                </Card.Text>
            </Card.Body>
        </Card> 
    )
}

export default Post
