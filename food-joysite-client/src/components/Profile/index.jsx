import React from "react";
// import { useNavigate } from 'react-router-dom';
import { Container, Card } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";


export default function Profile() {
  // const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  return (
    <Container>
      <Card className="form-profile">
        <Card.Body>
          <DataTable
            className="form-profile-body"
            columns={[
              { selector: (row) => row.label },
              { selector: (row) => row.value },
            ]}
            data={[
              { label: "Nama", value: auth.user.full_name },
              { label: "Email", value: auth.user.email },
            ]}
          />
        </Card.Body>
        {/* <Button className='btn-back-profile' size="md" onClick={_ => navigate('/account')}>
          Back
        </Button> */}
      </Card>
    </Container>
  );
}
