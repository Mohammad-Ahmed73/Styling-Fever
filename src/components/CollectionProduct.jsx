import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Ratio, Image, Button } from 'react-bootstrap';

const CollectionProduct = () => {
  return (
    <Container fluid="xl">
      <Row className='m-0'>
        <Col md={5} className='p-0'>
          <div className="content p-5 h-100 d-flex flex-wrap align-items-center">
            <h2>Jackets Collection</h2>
            <p className='mb-5'>Stay Warm & Dry, From Pist to Park Take comfort in the Gold</p>
            <Link>View Collections</Link>
          </div>
        </Col>

        <Col md={7} className='p-0'>
          <Row>
            <Col sm={6} className='p-0'>
                <Link>
                    <Ratio aspectRatio={'1x1'}>
                        <Image src='https://ae01.alicdn.com/kf/S9f1f5e06f12d438797c742f992050ce8a.jpg_480x480.jpg_.webp' />
                    </Ratio>
                </Link>
            </Col>
            <Col sm={6} className='p-0'>
                <Link>
                    <Ratio aspectRatio={'1x1'}>
                        <Image src='https://ae01.alicdn.com/kf/S9f1f5e06f12d438797c742f992050ce8a.jpg_480x480.jpg_.webp' />
                    </Ratio>
                </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CollectionProduct;