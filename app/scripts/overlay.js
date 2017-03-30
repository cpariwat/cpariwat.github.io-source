class Overlay {
  constructor() {

  }

  initOverlay() {
    this._bindOverlays();
  }

  _bindOverlays() {
    $('#leftOverlay').hover(() => {
      $('#workContent').scrollTo('#overlayObject li:first-child', 3000, {axis: 'x'});
    }, () => {
      $('#workContent').stop();
    });

    $('#rightOverlay').hover(() => {
      $('#workContent').scrollTo('#overlayObject li:last-child', 3000, {axis: 'x'});
    }, () => {
      $('#workContent').stop();
    });
  }
}

export default Overlay;
