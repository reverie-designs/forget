// test coordinates
// const t1 = {lat: 36.12, lng: -86.67}
// const t2 = {lat: 33.94, lng: -118.40}
// test output = 2887.2599506071124km

const rad = (x) => {
  return x * Math.PI / 180;
};

export default function getDistance(p1, p2) {
  // var R = 6378137; // Earth’s mean radius in meters
  const R = 6372.8 // approx Earth's radius of the average circumference
  const dLat = rad(p1.lat - p2.lat);
  const dLong = rad(p2.lng - p1.lng);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const dist = R * c;
  return dist; //in Km
};
