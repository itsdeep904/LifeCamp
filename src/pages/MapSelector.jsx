import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";

const MapSelector = ({ onLocationSelect }) => {
  const [position, setPosition] = useState(null);

  // Custom component to handle map clicks
  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]);

        // Call Nominatim API
        fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`)
          .then((res) => res.json())
          .then((data) => {
            const address = {
              lat, // Latitude from the click event
              lng, // Longitude from the click event
              country: data.address?.country || "",
              city: data.address?.city || data.address?.town || data.address?.village || "",
              state: data.address?.state || "",
              pincode: data.address?.postcode || "",
              fullAddress: data.display_name || "",
            };
            onLocationSelect(address); // Pass data back to parent component
          })
          .catch((error) => console.error("Error fetching address:", error));
      },
    });

    return position ? <Marker position={position} /> : null;
  };

  return (
    <MapContainer
      center={[20.5937, 78.9629]} // Default to India's lat/lng
      zoom={5}
      style={{ height: "300px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationMarker />
    </MapContainer>
  );
};

export default MapSelector;
