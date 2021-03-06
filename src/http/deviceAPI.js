import { $host, $authHost } from "./index";
import  jwt_decode from "jwt-decode"

export const createType = async (type) => {
  const {data} = await $authHost.post("api/type", type);
  return data;
};
export const fetchTypes = async () => {
  const {data} = await $host.get("api/type");
  return data;
};

export const createBrand = async (type) => {
  const {data} = await $authHost.post("api/brand", type);
  return data;
};
export const fetchBrand = async () => {
  const {data} = await $host.get("api/brand");
  return data;
};
export const createDevice = async (type) => {
  const {data} = await $authHost.post("api/device", type);
  return data;
};
export const fetchDevice = async (typeId,brandId,page, limit) => {
  const {data} = await $host.get("api/device",{params:{typeId,brandId,page,limit}});
  return data;
};
export const fetchOneDevice = async (id) => {
  const {data} = await $host.get("api/device/"+id);
  return data;
};

