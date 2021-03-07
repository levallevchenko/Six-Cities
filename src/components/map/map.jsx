import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {offerPropTypes} from '../../prop-types/offer';

import "leaflet/dist/leaflet.css";

const Map = ({location, points, isMainMap, currentOffer}) => {
  const mapRef = useRef();

  const basicIcon = leaflet.icon({
    iconUrl: `/img/pin.svg`,
    iconSize: [27, 39],
  });

  const activeIcon = leaflet.icon({
    iconUrl: `/img/pin-active.svg`,
    iconSize: [27, 39],
  });

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
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
      .addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };

  }, [location]);

  const markers = [];
  const pushMarkers = (icon, offer) => {
    markers.push(
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude
          }, {icon})
          .addTo(mapRef.current));
  };

  useEffect(() => {
    points.forEach((point) => {
      pushMarkers(basicIcon, point);
    });

    // Separate push helps to render different markers with the same addresses in active state
    if (currentOffer) {
      pushMarkers(activeIcon, currentOffer);
    }

    return () => {
      markers.forEach((marker) => mapRef.current.removeLayer(marker));
    };
  }, [points, currentOffer]);

  return (
    <section className="cities__map map" id="map" style={isMainMap ? {height: `auto`} : {height: `579px`}} />
  );
};

Map.propTypes = offerPropTypes.points;
Map.propTypes = offerPropTypes.location;
Map.propTypes = offerPropTypes.offer;

Map.propTypes = {
  isMainMap: PropTypes.bool
};

export default Map;
