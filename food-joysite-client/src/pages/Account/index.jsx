import React from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { Link, useLocation, Outlet} from 'react-router-dom'
import AddAddress from '../../components/AddAddress';
import Address from '../../components/Address';
import Order from '../../components/Order';
import Profile from '../../components/Profile';
import { useState } from 'react';
import './index.scss';

 
export default function Account() {
  const { location } = useLocation();
  console.log(location);

  const [page, setPage] = useState(0);
  function selectpage(value){
  // console.log(value);
  setPage(value)
}

  return (
    <Container className="p-5">
      <Card className='form-account'>
        <Card.Header className='account-tittle'>
          My Account
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={3}>
              <ListGroup>
                <Link onClick={()=>selectpage(0)} exact>
                  <ListGroup.Item action className='item-account'>
                    Profile
                  </ListGroup.Item>
                </Link>
                <Link onClick={()=>selectpage(1)} >
                  <ListGroup.Item action className='item-account'>
                    Order
                  </ListGroup.Item>
                </Link>
                <Link onClick={()=>selectpage(2)} >
                  <ListGroup.Item action className='item-account'>
                    Address
                  </ListGroup.Item>
                </Link>
                <Link onClick={()=>selectpage(3)} >
                  <ListGroup.Item action className='item-account'>
                    Add Address
                  </ListGroup.Item>
                </Link>
              </ListGroup>
            </Col>
            <Col md={9}>
            {page === 0 ? <Profile/> :  null}
            {page === 1 ? <Order/> :  null}
            {page === 2 ? <Address/> :  null}
            {page === 3 ? <AddAddress/> :  null}
            </Col>
          </Row>
      <Outlet />
        </Card.Body>
      </Card>
    </Container>

  )
}