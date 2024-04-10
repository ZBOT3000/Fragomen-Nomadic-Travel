import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const MapComponent = () => {
  useEffect(() => {}, []);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-dark-gunmental">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        className="w-full h-full bg-dark-gunmental z-10"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]}></Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
