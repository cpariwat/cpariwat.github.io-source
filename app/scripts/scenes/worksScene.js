import Scene from '../scene'
import {TweenMax, TimelineLite, RoughEase, Power2, Power0} from 'gsap';
class WorksScene extends Scene {
  constructor(stage, renderer) {
    super(stage, renderer);

    this._setupWall();
    this._during();
  }

  _setupWall() {
    let wallDrawer = new Two({
      type: Two.Types.svg,
      fullscreen: true
    }).appendTo(document.getElementById('mur'));

    let stripeHeight = 30; //pixel
    let lineCount = Math.floor(wallDrawer.height / 10);
    let drawAt = stripeHeight / 2;
    for (let i = 0; i < lineCount; i++) {
      drawAt += stripeHeight;

      if (i % 2 === 0) {
        let stripe = wallDrawer.makeRectangle(wallDrawer.width / 2, drawAt, wallDrawer.width, stripeHeight);
        stripe.noStroke();
        stripe.fill = '#40C4FF';
      }
    }

    wallDrawer.update();

    this.wallLineCount = lineCount; // use for animations
  }

  _during() {
    // TweenMax.to('#miniMe #bouche', 1, {
    //   scaleY: '20',
    //   ease: Power2.easeInOut,
    //   delay: 0,
    //   repeat: -1,
    //   yoyo: true,
    //   repeatDelay: 0
    // });

    TweenMax.to('#miniMe #manglogo', 0.5, {
      fill: '#ddd',
      ease: RoughEase.ease.config({
        template: Power0.easeNone,
        strength: 1,
        points: 20,
        taper: 'none',
        randomize: true,
        clamp: false
      }),
      delay: 0,
      repeat: -1,
      yoyo: true,
      repeatDelay: 0
    });

  }

  in() {
    let tl = new TimelineLite();

    tl.to('#topHeader', 0.5, {css: {className: '-=welcome'}});
    tl.to('.top-header', 0.5, {css: {className: '+=works'}});
    // for (let i = 1; i <= this.wallLineCount; i++) {
    //
    //   // let fromX = (i%2 == 0) ? '0% 50%' : '100% 50%';
    //   let fromX = (i % 2 === 0) ? -window.innerWidth/4 : window.innerWidth * 7/4;
    //   tl.set(`#mur #two_${i}`, {transformOrigin: '0 50%'});
    //   tl.fromTo(`#mur #two_${i}`, 1, {x: fromX}, {x: '25%'}, 0);
    // }
    tl.fromTo(`#mur`, 0.5, {opacity: 0}, {opacity: 1}, 0);

    return tl;
  }

  out() {
    let tl = new TimelineLite();

    tl.to('section#works', 1, {opacity: 0}, 0);
    tl.to('#mur', 1, {transform: 'rotate(-30deg) scale(2)'}, 0);
    tl.to('#mur g path', 1, {attr: {fill: '#EE9946'}}, 0);
    return tl;
  }
}

export default WorksScene;
