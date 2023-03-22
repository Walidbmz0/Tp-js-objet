import mapboxgl from "mapbox-gl";
import { DummyControl } from "../Control/DummyControl";
import { ClearStorageControl } from "../Control/ClearStorageControl";

export class Map {
  mainMap;
  eventLat;
  eventLng;
  value;

  constructor() {
    this.eventLat = document.getElementById("lat");
    this.eventLng = document.getElementById("lng");
  }

  mapInit() {
    this.mainMap = new mapboxgl.Map({
      container: "main-map",
      style: "mapbox://styles/walidbmz/cleyb1135000101pij5s30mx2",
      zoom: 5.5,
      center: [2.4, 47.6],
    });
  }

  navigationControl() {
    const navControl = new mapboxgl.NavigationControl({
      visualizePitch: true,
    });
    this.mainMap.addControl(navControl, "bottom-right");
  }

  geolocalisationControl() {
    const geoLocControl = new mapboxgl.GeolocateControl({
      fitBoundsOptions: {
        zoom: 15,
      },
      positionOptions: {
        enableHighAccuracy: true,
      },
      showUserHeading: true,
      // trackUserLocation: true
    });
    this.mainMap.addControl(geoLocControl, "top-left");
  }

  getCoordinates() {
    this.mainMap.on("click", (evt) => {
      //     ( evt );
      //     (`A click event has occurred at ${evt.lngLat}`);
      //     ( evt.lngLat.lat )
      //     ( evt.lngLat.lng )
      this.eventLat.value = evt.lngLat.lat;
      this.eventLng.value = evt.lngLat.lng;
    });
  }

  DummyControl() {
    const dummyControl = new DummyControl();
    this.mainMap.addControl(dummyControl, "top-left");
  }

  ClearStorageControl() {
    const clearStorageControl = new ClearStorageControl();
    this.mainMap.addControl(clearStorageControl, "top-left");
  }
}
