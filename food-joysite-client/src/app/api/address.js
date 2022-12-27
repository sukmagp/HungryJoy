import axios from "axios";
import { config } from "../../config";

export const getAddress = async () => {
  const { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.get(`${config.api_host}/api/delivery-address?limit=`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
export const getProvinsi = async () => {
  return await axios.get(
    `https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`
  );
};

export const getKabupaten = async (code) => {
  return await axios.get(
    `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${code}.json`
  );
};

export const getKecamatan = async (code) => {
  return await axios.get(
    `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${code}.json`
  );
};

export const getKelurahan = async (code) => {
  return await axios.get(
    `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${code}.json`
  );
};

export const addAddress = async (payload) => {
  const { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.post(`${config.api_host}/api/delivery-address`, payload, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
