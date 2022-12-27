import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component'
import { Button, Container, Card } from "react-bootstrap";
import { getAddress } from '../../app/api/address';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import "./index.scss";

export default function Address() {
  const [address, setAddress] = useState([]);
  useEffect(() => {
    getAddress()
    .then(({data: {data}}) => setAddress(data));
  }, []);

  const navigate = useNavigate();
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
