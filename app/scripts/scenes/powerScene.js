import Scene from '../scene';
import {TimelineMax, Power3} from 'gsap';

class PowerScene extends Scene {
  constructor(stage, renderer, resources) {
    super(stage, renderer);

    this.resources = resources;

    this._createWheel();

    this._during();
  }

  _createSuns(resources) {
    this.redSun = new PIXI.Sprite(resources.rsun.texture);
    this.redSun.scale.x = this.redSun.scale.y = this.ratio;
    this.stage.addChild(this.redSun);

    this.yellowSun = new PIXI.Sprite(resources.ysun.texture);
    this.yellowSun.scale.x = this.yellowSun.scale.y = this.ratio;
    this.stage.addChild(this.yellowSun);
  }


  _createWheel() {
    // create wheels
    let baseScale = 150;

    let yDrawer = new Two({
      type: Two.Types['svg'],
      fullscreen: true
    }).appendTo(document.getElementById('wheels'));


    for(let i=0; i< 150; i++) {

      let currentScale = baseScale--;
      let ySize = currentScale * 10;
      let ycircle = yDrawer.makeCircle(yDrawer.width/2, yDrawer.height/2, ySize);
      ycircle.noStroke();
      ycircle.fill = (i%2) ? '#FFFE9E' : '#FFAB3E'; // Accepts all valid css color
      ycircle.linewidth = 1;
      ycircle.top = '50%';
      ycircle.left = '50%';

    }

    yDrawer.update();
  }

  _during() {
    TweenMax.to("#ob2 #bra", 1.5, {rotation: "10_cw", transformOrigin:"50% 100%", delay: 0, repeat:-1, yoyo:true, repeatDelay:0});
  }

  in(duration) {
    let tl = new TimelineMax();

    tl.fromTo(this.redSun.position, duration,
      {x: this.wPer2Pix(30), y: this.hPer2Pix(150)},
      {x: this.wPer2Pix(30), y: this.hPer2Pix(50)},
      0);
    tl.fromTo(this.yellowSun.position, duration/2,
      {x: this.wPer2Pix(50), y: this.hPer2Pix(150)},
      {x: this.wPer2Pix(50), y: this.hPer2Pix(30)},
      0);

    return tl
  }

  out() {
    let tl = new TimelineMax();
    tl.to('#ob2', 1, {opacity: '0'}, 0);

    tl.to(this.yellowSun.position, 1,
      {x: this.wPer2Pix(50) - (this.yellowSun.width/2), y: this.hPer2Pix(50) - (this.yellowSun.height/2)},
      0);
    tl.to(this.redSun.position, 1,
      {x: this.wPer2Pix(50) - (this.redSun.width/2), y: this.hPer2Pix(50) - (this.redSun.height/2)},
      0);
    return tl
  }
}

export default PowerScene;
