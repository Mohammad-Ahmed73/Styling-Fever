import React from 'react';
import { Container, Row, Col, Figure, Image } from 'react-bootstrap';
import ProductImage1 from '../assets/images/apple-watch-series-8.png';
import ProductImage2 from '../assets/images/apple-watch-ultra.png';
import ProductImage3 from '../assets/images/apple-watch-se.png';

function CompareProduct() {
    return (
        <section className='compare-with-section'>
            <Container fluid="lg">
                <div className='text-center'>
                    <h2 className='head-h2 gradient-color fw-bold mb-5'>Compare Product</h2>
                </div>
                <Row className='mb-4'>
                    <Col lg={4} md={6} className='text-center mb-4'>
                        <h3 className='head-h3 fw-bold red-80 mb-3'>
                            Compare with
                        </h3>
                        <form action="" className='compare-with-form'>
                            <div className='field-wrap'>
                                <input type="text" className='input-field w-100' />
                                <input type="submit" value="Search" className='submit-field w-100' />
                            </div>
                        </form>
                    </Col>
                </Row>
                <Row className='compare-with-product justify-content-center'>
                    <Col lg={4} md={6} className='column mb-4'>
                        <h4 className='head-h4 fw-normal'>Series 8</h4>
                        <Figure className='mb-0 product-image'>
                            <Image src={ProductImage1} />
                        </Figure>
                        <ul className='compare-with-list list-unstyled'>
                            <li className='list-item'>
                                $60
                            </li>
                            <li className='list-item'>
                                <i class="fa-solid fa-circle-xmark wrong"></i>
                                Lorem ipsum
                            </li>
                            <li className='list-item'>
                                <i class="fa-solid fa-circle-check check"></i>
                                Lorem ipsum
                            </li>
                        </ul>
                    </Col>
                    <Col lg={4} md={6} className='column mb-4'>
                        <h4 className='head-h4 fw-normal'>Ultra</h4>
                        <Figure className='mb-0 product-image'>
                            <Image src={ProductImage2} />
                        </Figure>
                        <ul className='compare-with-list list-unstyled'>
                            <li className='list-item'>
                                $60
                            </li>
                            <li className='list-item'>
                                <i class="fa-solid fa-circle-xmark wrong"></i>
                                Lorem ipsum
                            </li>
                            <li className='list-item'>
                                <i class="fa-solid fa-circle-check check"></i>
                                Lorem ipsum
                            </li>
                        </ul>
                    </Col>
                    <Col lg={4} md={6} className='column mb-4'>
                        <h4 className='head-h4 fw-normal'>SE</h4>
                        <Figure className='mb-0 product-image'>
                            <Image src={ProductImage3} />
                        </Figure>
                        <ul className='compare-with-list list-unstyled'>
                            <li className='list-item'>
                                $60
                            </li>
                            <li className='list-item'>
                                <i class="fa-solid fa-circle-xmark wrong"></i>
                                Lorem ipsum
                            </li>
                            <li className='list-item'>
                                <i class="fa-solid fa-circle-check check"></i>
                                Lorem ipsum
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CompareProduct
