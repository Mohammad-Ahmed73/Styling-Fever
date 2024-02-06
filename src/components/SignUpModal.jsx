import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Ratio, Image, Button, Modal, Form } from 'react-bootstrap';
import '../assets/css/signup-styling.css'


const SignUpModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your sign-up logic here
        handleClose();
    };
    return (
        <>
      <Button variant="primary" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" className='signupModal'>
        <Modal.Body>
        <Container>
            <Row className="justify-content-center align-items-stretch">
                <Col xs={12} md={7} className='signUpWrapper py-5'>
                        <div className="formHead text-center">
                            <h3>Sign into your Account</h3>
                            <p>Please enter your email and password</p>
                        </div>
                        <Form onSubmit={handleSubmit} className='formWrapper'>
                            <Form.Group controlId="formBasicEmail" className='formField'>
                                <div className="fieldIcon">
                                    <i class="fa-regular fa-envelope-open"></i>
                                </div>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className='formField'>
                                <div className="fieldIcon">
                                    <i class="fa-solid fa-lock"></i>
                                </div>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Link to='/'>Forgot your password?</Link>
                            <Button variant="primary" type="submit">
                                Sign Up
                            </Button>
                        </Form>
                </Col>
                <Col xs={12} md={5} className='registerWrapper py-5 text-white'>
                    <div className="formHead text-center">
                        <h3>Sign into your Account</h3>
                        <p>Enter your personal details & start journey with us</p>
                    </div>
                </Col>
            </Row>
        </Container>
        </Modal.Body>
      </Modal>
    </>
    )
};

export default SignUpModal;