import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Card, Container, Button, Image } from 'react-bootstrap'
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { config } from '../../config';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { addItem, removeItem } from '../../app/features/Cart/actions';
import { formatRupiah, sumPrice } from '../../utils';
import { useNavigate } from 'react-router-dom';
import './index.scss';


export default function Cart() {
  const cart = useSelector(state => state.cart);
  // const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handlePlus = item => {
    dispatch(addItem(item));
  }

  const handleMinus = item => {
    dispatch(removeItem(item));
  }

  const columns = [
    {
      name: 'Gambar',
      selector: row => <Image style={{margin:'10px', maxHeight: '100px', maxWidth:'80px', borderRadius: '100%'}} src={`${config.api_host}/images/products/${row.image_url}`} />
    },
    {
      name: 'Barang',
      selector: row => row.name
    },
    {
      name: 'Harga',
      selector: row => formatRupiah(row.price * row.qty)
    },
    {
      name: 'Qty',
      cell: row => (<div>
        <Button className='btn-handle' size="sm" onClick={() => handleMinus(row)}>
        <FontAwesomeIcon icon={faMinus} />
        </Button>
        <span className="mx-4">{row.qty}</span>
        <Button className='btn-handle' size="sm" onClick={() => handlePlus(row)}>
        <FontAwesomeIcon icon={faPlus} />
        </Button>
        </div>),
      center: true
    },
  ]

  return (
    <Container className="p-5">
      <Card className='cart-card'>
        <Card.Header className='cart-tittle'>
          Your Cart
        </Card.Header>
        <Card.Body>
          <DataTable
            columns={columns}
            data={cart}
            striped
            title={`Sub Total: ${formatRupiah(sumPrice(cart))}`}
          />
        </Card.Body>
        <Card.Footer>
        <div className="d-grid gap-2">
          { cart.length > 0  ? 
          <Button className='btn-handle' size="md" onClick={_ => navigate('/checkout')}>
            Checkout
          </Button> : null
          }
        </div>
        </Card.Footer>
      </Card>
    </Container>
  )
}
