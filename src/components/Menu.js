import React from 'react';
import { Button, Container } from 'react-bootstrap';

class Menu extends React.Component {
    render() {
        return (
            <div>
                <Container className="bg-dark text-white">
                    <h1>Pegasus Educational Supplies</h1>
                    <Button variant="warning">Click me!</Button>
                </Container>
            </div>
        );
    }
}

export default Menu;