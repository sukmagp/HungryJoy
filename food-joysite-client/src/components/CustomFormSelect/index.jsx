import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { getProvinsi } from "../../app/api/address";
import { getKabupaten } from "../../app/api/address";
import { getKecamatan } from "../../app/api/address";
import { getKelurahan } from "../../app/api/address";
import PropTypes from "prop-types";

export default function CustomFormSelect({
  location,
  code,
  onChange,
  isInvalid,
  value,
}) {
  const [locations, setLocations] = useState([]);

  useEffect(async () => {
    let data;
    switch (location) {
      case "provinsi":
        data = await getProvinsi();
        break;

      case "kabupaten":
        data = await getKabupaten(code);
        break;

        case "kecamatan":
        data = await getKecamatan(code);
        break;

        case "kelurahan":
        data = await getKelurahan(code);
        break;

      default:
        break;

      }
      setLocations(data?.data || []);
  }, [location, code]);

  return (
    <Form.Select
      disabled={locations.length === 0}
      onChange={(e) => onChange(e.target.value)}
      isInvalid={isInvalid}
      defaultValue=""
    >
      <option value="">Pilih lokasi...</option>
      {locations.map((location, i) => (
        <option
          value={JSON.stringify({ label: location.name, value: location.id })}
          key={i}
        >
          {location.name}
        </option>
      ))}
    </Form.Select>
  );
}

CustomFormSelect.defaultProps = {
  location: "provinsi",
  isInvalid: false,
  value: "",
};

CustomFormSelect.propTypes = {
  location: PropTypes.oneOf(["provinsi", "kabupaten", "kecamatan", "kelurahan"])
    .isRequired,
  code: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};
