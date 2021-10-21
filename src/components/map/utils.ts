export const requestFullScreen = element => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullScreen) {
    element.msRequestFullScreen();
  }
};
  
export const exitFullScreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
    // @ts-expect-error expected polyfill
  } else if (document.webkitExitFullscreen) {
    // @ts-expect-error expected polyfill
    document.webkitExitFullscreen();
    // @ts-expect-error expected polyfill
  } else if (document.mozCancelFullScreen) {
    // @ts-expect-error expected polyfill
    document.mozCancelFullScreen();
    // @ts-expect-error expected polyfill
  } else if (document.msCancelFullScreen) {
    // @ts-expect-error expected polyfill
    document.msCancelFullScreen();
  }
};
  
export const toggleFullScreen = (
  element: ChildNode,
  isFullScreen: Boolean
) => {
  if (isFullScreen) {
    exitFullScreen();
  } else {
    requestFullScreen(element);
  }
};

export const preparePath = path =>
  path && path.length > 0
    ? path.map(point => ({
        lat: parseFloat((point || {}).lat || 0),
        lng: parseFloat((point || {}).lng || 0),
      }))
    : []


const ICON_MARKER_SIZE = { width: 38, height: 50 }
const ICON_MARKER_ORIGINAL_LABEL_POSITION = { x: 19, y: 19 };
const ICON_MARKER_ORIGINAL_ANCHOR_POSITION = { x: 19, y: 46 };
/*
  * Returns a size for google maps icon
  *
  * outerSize* - size of whole clickable area
  * innerSize* - size of actual an icon inside
  * originalLabelPosition (optional) - original label position on an icon
  * originalAnchorPosition (optional) - original anchor position of an icon
  */
export const getIconSize = (
  outerSize = ICON_MARKER_SIZE,
  innerSize = ICON_MARKER_SIZE,
  originalLabelPosition = ICON_MARKER_ORIGINAL_LABEL_POSITION,
  originalAnchorPosition = ICON_MARKER_ORIGINAL_ANCHOR_POSITION,
) => {
  const labelPosition =
    originalLabelPosition || new window.google.maps.Point(outerSize.width / 2, outerSize.height / 2)
  const anchorPosition =
    originalAnchorPosition || new window.google.maps.Point(outerSize.width / 2, outerSize.height / 2)
  return {
    size: outerSize,
    scaledSize: innerSize,

    origin: new window.google.maps.Point(
      (innerSize.width - outerSize.width) / 2,
      (innerSize.height - outerSize.height) / 2
    ),

    anchor: new window.google.maps.Point(
      anchorPosition.x * (outerSize.width / outerSize.width),
      anchorPosition.y * (outerSize.height / outerSize.height)
    ),

    labelOrigin: new window.google.maps.Point(
      labelPosition.x * (outerSize.width / outerSize.width),
      labelPosition.y * (outerSize.height / outerSize.height)
    ),
  }
};
