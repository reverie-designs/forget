/**
 * creates a circular visual fence arond a point
 * @param {object} googleObj - google map api + object
 * @param {object} center - lat and lng of circle fence center
 * @param {object} map - reference map to place markers in
 * @param {number} radius - fence radius in KM
 * @param {boolean} inside - change fill color of fence based on boolean value
 * @param {boolean} isOn - display fence
 */
const createFence = (googleObj,center,map,radius = 3,isOn = false) => {
  const circle = new googleObj.maps.Circle({
    strokeColor: '#FFFFFF',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#0000FF',
    fillOpacity: 0.35,
    map: map,
    center: center,
    radius: radius * 1000,
    visible: isOn,
    editable: true,
    geodesic: true,
    draggable: false,
  });
  // googleObj.maps.event.addListener(circle, 'radius_changed', function() {
  //   console.log(circle.getRadius());
  // });
  return circle
}
export default createFence