import Scene from '../scene';
import ParalaxObject from '../paralaxObject';
import Star from '../star';
import {shuffle} from '../tools';
import {BASE_WIDTH} from '../constants';
import {TimelineMax, TweenLite, Back} from "gsap";

class WelcomeScene extends Scene {
  constructor(stage, renderer, animateList) {
    super(stage, renderer);
    this.animateList = animateList;
    this.stars = [];
    this.mountains = [];

    this._setupMountains();
    this._setupStars();
    this._bindResize();
  }

  _setupMountains() {
    let backTexture = PIXI.Texture.fromImage('images/back.svg');
    this.back = new ParalaxObject(backTexture, BASE_WIDTH, 200, 0, window.innerHeight - 200, 0.128);
    this.mountains.push(this.back);

    let midTexture = PIXI.Texture.fromImage('images/mid.svg');
    this.mid = new ParalaxObject(midTexture, BASE_WIDTH, 150, 0, window.innerHeight - 150, -0.96);
    this.mountains.push(this.mid);

    let frontTexture = PIXI.Texture.fromImage('images/front.svg');
    this.front = new ParalaxObject(frontTexture, BASE_WIDTH, 100, 0, window.innerHeight - 100, 0.64);
    this.mountains.push(this.front);

    this.animateList.push(...this.mountains);
  }

  _setupStars() {
    let ystarTexture = PIXI.Texture.fromImage('images/ystar.svg');
    let wstarTexture = PIXI.Texture.fromImage('images/wstar.svg');
    let bstarTexture = PIXI.Texture.fromImage('images/bstar.svg');

    for (let i of Array(100).keys()) {
      let star = new Star(ystarTexture, 0.3);
      this.stars.push(star);
    }

    for (let i of Array(600).keys()) {
      let star = new Star(wstarTexture, 0.2);
      this.stars.push(star);
    }

    for (let i of Array(300).keys()) {
      let star = new Star(bstarTexture, 0.1);
      this.stars.push(star);
    }
  }

  _bindResize() {
    let _resize = () => {
      // console.log(window.innerHeight);
      let ratio = window.innerWidth / BASE_WIDTH;

      // Update the this.renderer dimensions
      this.renderer.resize(window.innerWidth,
        window.innerHeight);

      // this.mountains.map((mount) => {
      //   mount.reScale(ratio);
      // });
      //
      // shuffle(this.stars).map((star, idx) => {
      //   if (idx < Math.ceil(1000 * ratio)) { // the ratio of stars should equal screen ratio
      //     star.putOnTheSky();
      //     star.scale.x = star.scale.y = star.originalScale * ratio;
      //   }
      // });

    };
    _resize();
    window.addEventListener("resize", _resize);
  }

  in(duration) {
    let tl = new TimelineMax();
    this.inTl = tl;
    this.stars.map((star) => {
      this.stage.addChild(star);
      star.shine();
    });

    this.mountains.map((mount) => {
      this.stage.addChild(mount);
    });

    let _onMountainMoveInComplete = (elem) => {
      elem.isAnimating = true;
    };

    tl.fromTo(this.back, duration, {x: 1000, onComplete: _onMountainMoveInComplete(this.back)}, {x: 0}, 0);
    tl.fromTo(this.mid, duration, {x: -1000, onComplete: _onMountainMoveInComplete(this.mid)}, {x: 0}, 0);
    tl.fromTo(this.front, duration, {x: 1000, onComplete: _onMountainMoveInComplete(this.front)}, {x: 0}, 0);

    return tl;
  }

  out(duration) {
    let tl = new TimelineMax();
    this.stars.map((star) => {
      let delay = Math.random() * (1 - 0);
      tl.add(star.fall(), delay);
    });

    tl.to(this.back, duration, {y: window.innerHeight + 300, ease: Back.easeOut.config(4)}, 0.4);
    tl.to(this.mid, duration, {y: window.innerHeight + 300, ease: Back.easeOut.config(4)}, 0.2);
    tl.to(this.front, duration, {y: window.innerHeight + 300, ease: Back.easeOut.config(4)}, 0);

    return tl;
  }

  next() {

  }

  back() {
    this.stars.map((star) => {
      star.shine();
    });
  }
}

export default WelcomeScene;
