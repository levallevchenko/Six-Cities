import React, {useEffect} from 'react';
import leaflet from 'leaflet';
import {offerPropTypes} from '../../prop-types/offer';

import "leaflet/dist/leaflet.css";

const Map = ({location, points, isMainMap}) => {
  const icon = leaflet.icon({
    iconUrl: `/img/pin.svg`,
    iconSize: [27, 39]
  });

  useEffect(() => {
    const map = leaflet.map(`map`, {
      center: {
        lat: location.latitude,
        lng: location.longitude
      },
      zoom: location.zoom,
      zoomControl: true,
      marker: true,
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    points.forEach((point) => {
      leaflet.marker({
        lat: point.latitude,
        lng: point.longitude
      },
      {
        icon,
      })
      .addTo(map);

      return () => {
        map.remove();
      };
    });
  }, []);

  return (
    <section className="cities__map map" id="map" style={isMainMap ? {height: `auto`} : {height: `579px`}} />
  );
};

Map.propTypes = offerPropTypes.city;
Map.propTypes = offerPropTypes.location;

export default Map;
