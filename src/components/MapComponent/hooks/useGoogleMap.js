import React, { useState, useEffect} from "react";
import GoogleMapsApiLoader from "google-maps-api-loader";

const useGoogleMap = apiKey => {
  const [googleMap, setGoogleMap] = useState(null);
  useEffect(() => {
    GoogleMapsApiLoader({ apiKey }).then(google => {
      setGoogleMap(google);
    });
  }, []);
  return googleMap;
};

export default useGoogleMap