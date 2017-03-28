import Scene from '../scene';
import ParalaxObject from '../paralaxObject';
import Star from '../star';
import {shuffle} from '../tools';
import {BASE_WIDTH} from '../constants';
import {TimelineMax, TweenLite, Back} from "gsap";
import {svgToDataUrl} from '../tools';

class WelcomeScene extends Scene {
  constructor(stage, renderer, resources, animateList) {
    super(stage, renderer);
    this.animateList = animateList;
    this.stars = [];
    this.mountains = [];

    this._setupMountains(resources);
    this._setupStars(resources);

    // on load
    this.mountains.map((mount) => {
      mount.reScale(this.ratio);
    });

    shuffle(this.stars).map((star, idx) => {
      if (idx < Math.ceil(this.stars.length * this.ratio)) { // the ratio of stars should equal screen ratio
        star.putOnTheSky();
        star.scale.x = star.scale.y = star.originalScale * this.ratio;
      }
    });

    this._during();
  }

  _setupMountains(resources) {
    this.back = new ParalaxObject(resources.back.texture, 1200, 200, 0, window.innerHeight - 200, 0.16);
    this.mountains.push(this.back);

    this.mid = new ParalaxObject(resources.mid.texture, 1200, 125, 0, window.innerHeight - 125, -0.32);
    this.mountains.push(this.mid);

    this.animateList.push(...this.mountains);
  }

  _creatMountainsTexture(maxHeight) {
    let mountainsDrawer = new Two({
      type: Two.Types['svg'],
      fullscreen: true
    });

    let wholeWidth = 0;

    let radius = 100;
    let currentX = 0;

    while (wholeWidth < mountainsDrawer.width) {
      currentX += radius * 4 / 3;
      let height = Math.random() * (100 - 50) + 50;

      let mont = mountainsDrawer.makePolygon(currentX, height, height, 3);
      mont.fill = '#81c784';
      mont.noStroke();

      wholeWidth = currentX + radius;
    }


    mountainsDrawer.update();
    return PIXI.Texture.fromImage(svgToDataUrl(mountainsDrawer.renderer.domElement));
  }

  _setupStars() {
    let starPariticles = new PIXI.particles.ParticleContainer(1000, {
      scale: true,
      position: true,
      rotation: false,
      uvs: true,
      alpha: true
    });

    this.stage.addChild(starPariticles);

    this._createStars(4, '#fffe9e', 0.3, 50, starPariticles);
    this._createStars(4, '#fff', 0.2, 300, starPariticles);
    this._createStars(3, '#b3e5fc', 0.2, 300, starPariticles);

    this.animateList.push(...this.stars);
  }

  _createStars(radius, color, scale, amount, starPariticles) {
    let starDrawer = new Two({
      type: Two.Types['svg'],
      width: radius * 2,
      height: radius * 2
    });

    // centerX, centerY, radius
    let starSvg = starDrawer.makeCircle(radius, radius, radius);
    starSvg.noStroke();
    starSvg.fill = color; // Accepts all valid css color

    starDrawer.update();

    for (let i = 0; i < amount; i++) {
      let star = new Star(PIXI.Texture.fromImage(svgToDataUrl(starDrawer.renderer.domElement)), scale);
      starPariticles.addChild(star);
      this.stars.push(star);
    }
  }

  _during() {
    let typerTl = new TimelineMax({repeat: -1, yoyo: false, repeatDelay: 0});

    let devTypeText = document.getElementById("devType");
    typerTl.to(devTypeText, 0.8, {text: "Front-end", ease: Linear.easeNone, delay: 2});
    typerTl.to(devTypeText, 0.8, {text: "Back-end", ease: Linear.easeNone, delay: 2});
    typerTl.to(devTypeText, 0.8, {text: "Full-stack", ease: Linear.easeNone, delay: 2});

    TweenMax.to("#compassContainer", 1, {y: "+=10", delay: 0, repeat: -1, yoyo: true, repeatDelay: 0});
    TweenMax.to("#compassContainer #compass #hands", 1.5, {
      rotation: "30_cw",
      transformOrigin: "50% 50%",
      delay: 0,
      repeat: -1,
      yoyo: true,
      repeatDelay: 0
    });


    let starfallTl = new TimelineLite();
    for (let star of this.stars) {
      starfallTl.add(star.fall());
    }
  }

  in(duration) {
    let tl = new TimelineMax();

    tl.set('#topHeader', {css: {className: "+=welcome"}});

    this.mountains.map((mount) => {
      this.stage.addChild(mount);
    });

    let _onMountainMoveInComplete = (elem) => {
      elem.isAnimating = true;
    };

    tl.fromTo(this.back, duration, {x: 1000, onComplete: _onMountainMoveInComplete(this.back)}, {x: 0}, 0);
    tl.fromTo(this.mid, duration, {x: -1000, onComplete: _onMountainMoveInComplete(this.mid)}, {x: 0}, 0);

    return tl;
  }

  out() {
    let tl = new TimelineMax();
    this.stars.map((star) => {
      let delay = Math.random() * (1 - 0);
      tl.add(star.fall(), delay);
    });

    tl.to("#compassContainer", 0.5, {css: {bottom: '-100%'}, ease: Back.easeIn}, 1);
    tl.to("#textIntroduction, #nightBack", 0.8, {css: {opacity: 0}, ease: Power3.easeOut}, 1.5);
    tl.to("#dayBack", 0.8, {css: {opacity: 1}, ease: Power3.easeOut}, 1.5);

    tl.to('.world', 1, {scale: 20}, 2);
    tl.to('.world', 0.1, {alpha: 0}, 3);

    return tl;
  }
}

export default WelcomeScene;
