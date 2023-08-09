import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const OrderItem = ({ order }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Orden: {order.id}</Card.Title>
                <Card.Text>Fecha: {order.date}</Card.Text>
                <Card.Text>Estado: {order.status}</Card.Text>
                <Card.Text>Total: ${order.total}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default OrderItem;
