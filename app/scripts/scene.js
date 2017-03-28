import {BASE_WIDTH} from './constants';

class Scene {
  constructor(stage, renderer) {
    this.stage = stage;
    this.renderer = renderer;

    this.ratio = window.innerWidth / BASE_WIDTH;
  }

  // Speed (per millisecond)
  // return in timeline
  in() {

  }

  // Speed (per millisecond)
  // return out timeline
  out() {

  }

  wPer2Pix(percent) {
    return window.innerWidth * percent / 100;
  }

  hPer2Pix(percent) {
    return window.innerHeight * percent / 100;
  }
}

export default Scene;
