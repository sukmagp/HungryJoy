import React from 'react'
import { config } from '../../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Card, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { formatRupiah } from '../../utils'
// import { toggleTags } from '../../app/features/Product/actions'
// import Tag from '../Tag'
import "./index.scss";


export default function CardProduct({item, onAddToCart}) {
  const dispatch = useDispatch();
  return (
    <Card>
      <Card.Img className="img" variant="top" src={`${config.api_host}/images/products/${item.image_url}`} style={{maxHeight: '180px'}} />
      <Card.Body>
        <Card.Title>{ item.name }</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">{ item.category?.name }</Card.Subtitle> */}
        <Card.Text>{item.description}</Card.Text>
        {/* <Tag items={item.tags} onClick={tag => dispatch(toggleTags(tag))} /> */}
        <br />
        <Card.Text>
          { formatRupiah(item.price) }
        </Card.Text>
        <Button onClick={() => onAddToCart()} className="add-cart">
        <FontAwesomeIcon icon={faCartPlus} />
        &nbsp;Add to cart
        </Button>
      </Card.Body>
    </Card>
  )
}
