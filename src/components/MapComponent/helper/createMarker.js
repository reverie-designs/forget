/**
 * creates a marker based on given position using google object
 * @param {object} googleObj - google map api + object
 * @param {object} LatLng - lat and lng of marker
 * @param {object} map - reference map to place markers in
 * @param {string} markerIcon - file path or URL
 * @param {string} desc - info window description
 */
const createMarker = (googleObj,LatLng,map,markerIcon,info) => {

  const marker = new googleObj.maps.Marker({
    position: LatLng,
    map: map,
    icon: {
            labelOrigin: new googleObj.maps.Point(15,45),
            url: markerIcon,
            scaledSize: new googleObj.maps.Size(30, 30)
    }
  });
  // console.log("------------------------MARKER", marker);
  const InfoWindow = new googleObj.maps.InfoWindow({
    content: `<div id="content">
                <button id="onBtn" class="btn btn-sm">
                ${info}
                </button>
              </div>`
  });
  marker.addListener("click", () => {
    InfoWindow.open(map, marker);
  });
  return marker
}

export default createMarker


// additional options
// var sizer = new google.maps.Marker({
//   draggable: true,
//   title: 'Radius Marker',
//   icon: {
//           url: "https://image.flaticon.com/icons/svg/109/109602.svg",
//           scaledSize: new google.maps.Size(20, 20)
//   },
//   label: {
//   text: 'test',
//   color: "white",
//   fontWeight: "bold",
//   fontSize: "16px"
//   }
// });