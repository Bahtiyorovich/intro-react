import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
// YOUR_API_KEY='AIzaSyBRlV3bMU3xR8K-8mEVZtPAQW0Q2mievlQ'

const libraries = ['places'];
const mapContainerStyle = {
  width: '50vw',
  height: '50vh',
};
const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};

const GoogleMaps = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBRlV3bMU3xR8K-8mEVZtPAQW0Q2mievlQ',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default GoogleMaps

