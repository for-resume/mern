import React, { useRef, useEffect } from "react";

// Styles
import "./Map.css";

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: +center.lat, lng: +center.lng },
      zoom: zoom,
    });

    new window.google.maps.Marker({
      position: { lat: +center.lat, lng: +center.lng },
      map: map,
    });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
