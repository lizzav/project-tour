import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "first" },
      { id: 2, name: "second" }
    ];
    this._brands = [
      { id: 1, name: "first22dss" },
      { id: 2, name: "seconssssd" }
    ];
    this._device = [
      {
        id: 1,
        name: "first22dss",
        price: 2344,
        rating: 5,
        img:
          "https://c.wallhere.com/photos/22/27/2560x1600_px_landscape_nature-1077192.jpg!d"
      },
      {
        id: 2,
        name: "first22dddsxxzxss",
        price: 2344,
        rating: 5,
        img:
          "https://c.wallhere.com/photos/22/27/2560x1600_px_landscape_nature-1077192.jpg!d"
      },
      {
        id: 3,
        name: "first22ddddss",
        price: 2344,
        rating: 5,
        img:
          "https://c.wallhere.com/photos/22/27/2560x1600_px_landscape_nature-1077192.jpg!d"
      }
    ];
    this._selectedTypes = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }
  setTypes(type) {
    this._types = type;
  }
  setBrands(Brand) {
    this._brands = Brand;
  }
  setDevice(device) {
    this._device = device;
  }
  setSelectedTypes(types) {
    this._selectedTypes = types;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }
  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get device() {
    return this._device;
  }

  get selectedTypes() {
    return this._selectedTypes;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
