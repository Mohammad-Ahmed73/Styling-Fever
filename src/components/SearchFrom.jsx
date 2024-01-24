import React from 'react'
import { Container, Row, Col, Figure, Image } from 'react-bootstrap';
import ChooseProductLogo from '../assets/images/bookmark-logo.svg';
import CategoryLogo from '../assets/images/grid-logo.svg';
import PriceLogo from '../assets/images/dollar-logo.svg';
import StoreLogo from '../assets/images/store-logo.svg';

function SearchFrom() {
    return (
        <section className='py-5'>
            <Container fluid="lg">
                <form action="" className='product-search-form'>
                    <Row className='align-items-center'>
                        <Col lg={5} className='column mb-lg-0 mb-4'>
                            <Row>
                                <Col md={6} className='mb-4 mb-md-0'>
                                    <div className='input-field-wrap'>
                                        <label className='field-label'>
                                            Product
                                        </label>
                                        <div className='field-wrap d-flex align-items-center'>
                                            <Image src={ChooseProductLogo} width={20} height={20} className='me-3' />
                                            <select name="product" id="product" className='select-field'>
                                                <option value="choose-product" selected>Choose Product</option>
                                                <option value="0">Product 1</option>
                                                <option value="1">Product 2</option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} className='mb-4 mb-md-0'>
                                    <div className='input-field-wrap'>
                                        <label className='field-label'>
                                            Product Type
                                        </label>
                                        <div className='field-wrap d-flex align-items-center'>
                                            <Image src={CategoryLogo} width={20} height={20} className='me-3' />
                                            <select name="product" id="product" className='select-field'>
                                                <option value="choose-product" selected>Category</option>
                                                <option value="0">Product 1</option>
                                                <option value="1">Product 2</option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={5} className='column mb-lg-0 mb-4'>
                            <Row>
                                <Col md={6} className='mb-4 mb-md-0'>
                                    <div className='input-field-wrap'>
                                        <label className='field-label'>
                                            Price
                                        </label>
                                        <div className='field-wrap d-flex align-items-center'>
                                            <Image src={PriceLogo} width={20} height={20} className='me-3' />
                                            <select name="product" id="product" className='select-field'>
                                                <option value="choose-product" selected>Pkr 0</option>
                                                <option value="0">Product 1</option>
                                                <option value="1">Product 2</option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} className='mb-4 mb-md-0'>
                                    <div className='input-field-wrap'>
                                        <label className='field-label'>
                                            Store
                                        </label>
                                        <div className='field-wrap d-flex align-items-center'>
                                            <Image src={StoreLogo} width={20} height={20} className='me-3' />
                                            <select name="product" id="product" className='select-field'>
                                                <option value="choose-product" selected>Store Locater</option>
                                                <option value="0">Product 1</option>
                                                <option value="1">Product 2</option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={2}>
                            <input type="submit" value="Search" className='submit-field' />
                        </Col>
                    </Row>
                </form>
            </Container>
        </section>
    )
}

export default SearchFrom
