import { Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { config } from "../../config";
import { formatRupiah, sumPrice } from "../../utils";
import './index.scss';


export default function Confirmation  ({ data, onClick }) {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const confirm = [
    {
      label: "Alamat",
      value: (
        <div>
          {data.nama}
          <br />
          {data.provinsi}, {data.kabupaten}, {data.kecamatan}, {data.kelurahan}
          <br />({data.detail})
        </div>
      ),
    },
    { label: "Sub Total", value: formatRupiah(sumPrice(cart)) },
    { label: "Ongkir", value: formatRupiah(config.global_ongkir) },
    {
      label: <strong>Total</strong>,
      value: (
        <strong>
          {formatRupiah(
            parseInt(sumPrice(cart)) + parseInt(config.global_ongkir)
          )}
        </strong>
      ),
    },
  ];
  return (
    <>
      <DataTable
        columns={[
          { selector: (row) => row.label },
          { cell: (row) => row.value },
        ]}
        title="Confirmation"
        data={confirm}
      />
      <div className="d-flex justify-content-between mt-3">
        <Button
          size="sm"
          onClick={(_) => navigate("/checkout")}
        >
          Back
        </Button>
        <Button className='btn-co' size="sm" onClick={onClick}>
          Checkout
        </Button>
      </div>
    </>
  );
};
