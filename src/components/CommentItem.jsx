import React from 'react';
import { Card } from 'react-bootstrap';

const CommentItem = ({ comment }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Producto: {comment.product}</Card.Title>
                <Card.Text>Calificación: {comment.rating}</Card.Text>
                <Card.Text>Comentario: {comment.comment}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CommentItem;
