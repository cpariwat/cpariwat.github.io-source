import Scene from '../scene'
import {TimelineMax, Power3} from "gsap";
class PowerScene extends Scene {
  constructor(stage, renderer, animateObject) {
    super(stage, renderer)

    this._createSuns();
  }

  _createSuns() {
    let ystarTexture = PIXI.Texture.fromImage('images/ystar.svg');
    this.redSun = new PIXI.Sprite(ystarTexture);
    this.redSun.scale.x = this.redSun.scale.y = 0;
    this.stage.addChild(this.redSun);

    this.yellowSun = new PIXI.Sprite(ystarTexture);
    this.yellowSun.scale.x = this.yellowSun.scale.y = 0;
    this.yellowSun.position.x = this.yellowSun.position.y = 200;
    this.yellowSun.addChild(this.redSun);
  }

  in(duration) {
    let tl = new TimelineMax();
    tl.to("#welcome-back", duration, {css:{opacity:0}, ease: Power3.easeOut}, 0);
    tl.to("#power-back", duration, {css:{opacity:1}, ease: Power3.easeOut}, 0);

    tl.to(this.redSun.scale, duration/2, {x: 50, y: 50}, duration/2);
    tl.to(this.yellowSun.scale, duration/2, {x: 50, y: 50}, duration/2);
    return tl
  }

  out(duration, startAt, tl) {

  }
}

export default PowerScene;
