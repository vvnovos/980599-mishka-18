/*eslint-disable*/
function init(ymaps) {
  /*eslint-enable*/
  var map = new ymaps.Map("map", {
    center: [59.93944115603922, 30.32302403991186],
    zoom: 16,
    controls: ["zoomControl"]
  });

  var placemark = new ymaps.Placemark(
    [59.938633647616214, 30.32304549758399],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/icon-map-pin.svg",
      iconImageSize: [66, 101],
      iconImageOffset: [-33, -101]
    }
  );

  map.behaviors.disable("scrollZoom");
  map.geoObjects.add(placemark);
}
