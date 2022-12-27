import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Tag({items, onClick}) {
  const products = useSelector(state => state.products);
  return (
    <>
      {
        items?.map((item, i) => (
          <Badge 
            pill 
            bg={products.tags.includes(item.name) ? 'warning' : 'secondary'} 
            style={{fontSize: '60%', cursor: 'pointer'}} 
            key={i}
            onClick={() => onClick(item.name)}
          ><FontAwesomeIcon icon={faTags} /> {item.name}</Badge>
        ))
      }
    </>
  )
}

Tag.propTypes = {
  items: PropTypes.array.isRequired
}

export default Tag

