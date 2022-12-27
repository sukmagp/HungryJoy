import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { getOrders } from '../../app/api/order';
import { formatRupiah, sumPrice } from '../../utils';
import { Card, Button } from 'react-bootstrap';
import { Container, LinkContainer } from 'react-router-bootstrap';
// import "./index.scss";

export default function Order() {


  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrders().then(({data: {data}}) => setOrders(data))
  }, [])

  return (
    <div>
      <DataTable
        columns={[
          {name: 'Order ID', cell: row => `#${row.order_number}`},
          {name: 'Total', cell: row => formatRupiah(sumPrice(row.order_items))},
          {name: 'Status', cell: row => row.status},
          {name: 'Invoice', cell: row => <LinkContainer to={`/invoices/${row._id}`}><Button variant="success" size="sm">Invoices</Button></LinkContainer>},
        ]}
        data={orders}
        expandableRows
        expandableRowsComponent={OrderItem}
      />
    </div>
  )
}

const OrderItem = ({data}) => {
  console.log(data)
  return <>
    <Container>
    {/* <DataTable 
      columns={[
        {name: 'Barang', selector: row => row.name},
        {name: 'Jumlah', selector: row => row.qty},
        {name: 'Total Harga', cell: row => formatRupiah(row.qty * row.price)},
      ]}
      data={data.order_items}
    /> */}
    <Card className="form-orders">
       <Card.Body>
         <DataTable
           columns={[
            {name: 'Barang', selector: row => row.name},
            {name: 'Jumlah', selector: row => row.qty},
            {name: 'Total Harga', cell: row => formatRupiah(row.qty * row.price)},
          ]}
          data={data.order_items}
         />
       </Card.Body>
       {/* <Button className='btn-orders' size="md" onClick={_ => navigate('/account')}>
       Back
       </Button> */}
     </Card>
    </Container>
  </>
}