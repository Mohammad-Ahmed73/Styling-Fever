import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import "../assets/css/footer.css"

function Footer() {
    return (
        <>
            <footer className="bg-dark text-light py-4 py-md-5">
                <Container fluid="xl">
                    <div className="footerTop">
                        <Row>
                            <Col lg={5} className='mb-4 mb-lg-0 text-center text-lg-start'>

                                <p>Some text goes here</p>
                                <div>
                                    <p>Follow us on social media:</p>
                                </div>
                            </Col>
                            <Col lg={7}>
                                <Row className='justify-content-md-start justify-content-center'>
                                    <Col sm={6} md={4} className='mb-4 mb-md-0'>
                                        <h5 className='h5 text-uppercase decoration-underline fw-bold text-decoration-underline mb-3 mb-md-4'>Resources</h5>
                                        <ul className='list-unstyled text-light'>
                                            <li><a href="#">Link 1</a></li>
                                            <li><a href="#">Link 2</a></li>
                                        </ul>
                                    </Col>
                                    <Col sm={6} md={4} className='mb-4 mb-md-0'>
                                        <h5 className='h5 text-uppercase decoration-underline fw-bold text-decoration-underline mb-3 mb-md-4'>Top Brand</h5>
                                        <ul className='list-unstyled'>
                                            <li><a href="#">Brand 1</a></li>
                                            <li><a href="#">Brand 2</a></li>
                                        </ul>
                                    </Col>
                                    <Col sm={6} md={4} className='mb-4 mb-md-0'>
                                        <h5 className='h5 text-uppercase decoration-underline fw-bold text-decoration-underline mb-3 mb-md-4'>Quick Links</h5>
                                        <ul className='list-unstyled'>
                                            <li><a href="#">Link 1</a></li>
                                            <li><a href="#">Link 2</a></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <div className='footerBottom py-4'>
                        <p className='copy-right-text paragraph-text-sm fw-normal mb-0'>
                            © 2020 Lift Media | All Rights Reserved
                        </p>
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer;