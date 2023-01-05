import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { Container, Card } from "react-bootstrap";
import { getAddress } from '../../app/api/address';
import "./index.scss";

export default function Address() {
  const [address, setAddress] = useState([]);
  useEffect(() => {
    getAddress()
    .then(({data: {data}}) => setAddress(data));
  }, []);

  return (
    <Container>
     <Card className="form-address">
       <Card.Body>
         <DataTable
           columns={[
                  {
                    name: 'Nama',
                    selector: row => row.nama
                  }, 
                  {
                    name: 'Detail',
                    cell: row => `${row.provinsi}, ${row.kabupaten}, ${row.kecamatan}, ${row.kelurahan}, ${row.detail}`
                  }
                ]}
                data={address}
         />
       </Card.Body>
       {/* <Button className='btn-address' size="md" onClick={_ => navigate('/add-address')}>
       <FontAwesomeIcon icon={faPlus} />
       &nbsp;Add Address
       </Button> */}
     </Card>
   </Container>
  )
}
