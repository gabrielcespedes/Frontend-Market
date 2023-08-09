import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import OrderItem from './OrderItem';
import CommentItem from './CommentItem';

const UserCard = ({ user }) => {
    return (
        <Card className='mt-5 mb-5'>
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
                {/* Mostrar otros datos del usuario */}
                {/* Por ejemplo, puedes mostrar el saldo, dirección, etc. */}
            </Card.Body>
            <ListGroup variant="flush">
                {user.orders && user.orders.length > 0 ? (
                    <ListGroup.Item>
                        <h4>Pedidos</h4>
                        {user.orders.map((order) => (
                            <OrderItem key={order.id} order={order} />
                        ))}
                    </ListGroup.Item>
                ) : (
                    <ListGroup.Item>
                        <h4>Pedidos</h4>
                        {/* Ejemplo de pedido */}
                        <OrderItem
                            order={{
                                id: 1,
                                date: '2023-07-18',
                                status: 'Enviado',
                                total: 50.0,
                            }}
                        />
                    </ListGroup.Item>
                )}

                {user.comments && user.comments.length > 0 ? (
                    <ListGroup.Item>
                        <h4>Comentarios/Calificaciones</h4>
                        {user.comments.map((comment) => (
                            <CommentItem key={comment.id} comment={comment} />
                        ))}
                    </ListGroup.Item>
                ) : (
                    <ListGroup.Item>
                        <h4>Comentarios/Calificaciones</h4>
                        {/* Ejemplo de comentario */}
                        <CommentItem
                            comment={{
                                id: 1,
                                productId: 1,
                                rating: 4,
                                comment: 'Excelente producto',
                            }}
                        />
                    </ListGroup.Item>
                )}
            </ListGroup>
        </Card>
    );
};

export default UserCard;
