import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";

const MapSelector = ({ onLocationSelect, initialLocation }) => {
  const [position, setPosition] = useState(null);
  const [isLocationView, setIsLocationView] = useState(false);

  useEffect(() => {
    if (initialLocation) {
      setPosition(initialLocation); // Set initial position
      // Fetch and pass the address for the initial location
      const { lat, lng } = initialLocation;
      fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`)
        .then((res) => res.json())
        .then((data) => {
          const address = {
            lat, // Latitude
            lng, // Longitude
            country: data.address?.country || "",
            city: data.address?.city || data.address?.town || data.address?.village || "",
            state: data.address?.state || "",
            pincode: data.address?.postcode || "",
            fullAddress: data.display_name || "",
          };
          !isLocationView && onLocationSelect(address); // Inform parent about the address
          setIsLocationView(true);
        })
        .catch((error) => console.error("Error fetching address for initial location:", error)
        
      );
    }
  }, [onLocationSelect]);

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
      center={position || [20.5937, 78.9629]} // Center the map on initial position or default
      zoom={position ? 13 : 5} // Zoom closer if position is set
      style={{ height: "300px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationMarker />
    </MapContainer>
  );
};

export default MapSelector;
 