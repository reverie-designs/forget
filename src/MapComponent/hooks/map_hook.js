import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import useGoogleMap from "./useGoogleMap"
import createMarker from "../helper/createMarker"
import createFence from "../helper/createFence"
import getDistance from "../helper/distanceBetweenPoints"

const baseIcon = "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
const homeIcon = "http://maps.google.com/mapfiles/ms/icons/homegardenbusiness.png"
const lhlIcon = "https://image.flaticon.com/icons/svg/365/365009.svg"

const useMap = ({ googleMap, mapContainerRef, initialConfig, homePosition }) => {
  const [map, setMap] = useState(null);
  useEffect(
    () => {
      if (!googleMap || !mapContainerRef.current) {
        return;
      }
      const map = new googleMap.maps.Map(
        mapContainerRef.current,
        initialConfig
      );
      let bounds  = new googleMap.maps.LatLngBounds()
      let loc = new googleMap.maps.LatLng(initialConfig.center.lat, initialConfig.center.lng);
      bounds.extend(loc);
      const m1 = createMarker(googleMap,initialConfig.center,map,baseIcon,'Current Location');
      
      const radius = 2.5
      if (homePosition){ // needs an additioanl condiaitional to see if patient has preset radius
        loc = new googleMap.maps.LatLng(homePosition.lat, homePosition.lng);
        bounds.extend(loc);
        loc = new googleMap.maps.LatLng(homePosition.lat-(radius*0.01), homePosition.lng+(radius*0.01));
        bounds.extend(loc);
        loc = new googleMap.maps.LatLng(homePosition.lat-(radius*0.01), homePosition.lng-(radius*0.01));
        bounds.extend(loc);
        loc = new googleMap.maps.LatLng(homePosition.lat+(radius*0.01), homePosition.lng+(radius*0.01));
        bounds.extend(loc);
        loc = new googleMap.maps.LatLng(homePosition.lat+(radius*0.01), homePosition.lng-(radius*0.01));
        bounds.extend(loc);
        const m2 = createMarker(googleMap,homePosition,map,homeIcon,'Home');
        m2.setDraggable(true);
        // need to link editable circle to radius
        const isInside = getDistance(initialConfig.center, homePosition) <= radius;
        console.log(isInside)
        let fence = createFence(googleMap,homePosition,map,radius,true);
        fence.setOptions({fillColor: isInside ? '#0000FF': '#FF0000'})
        
        // on fence size change
        googleMap.maps.event.addListener(fence, 'radius_changed', function() {
          let newRadius = fence.getRadius() / 1000
          let newPosition = getDistance(initialConfig.center, homePosition) <= newRadius;
          fence.setOptions({fillColor: newPosition ? '#0000FF': '#FF0000'})
        });
      };
      map.fitBounds(bounds);
      map.panToBounds(bounds); 
      setMap(map);
    },
    [initialConfig, googleMap, mapContainerRef, homePosition]
    );
    return map;
  };
  
  export { useGoogleMap, useMap };
  