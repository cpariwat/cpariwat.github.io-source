import Scene from '../scene'
import {TimelineMax, TweenMax, Power0, Power2} from 'gsap';
class ContactScene extends Scene {
  constructor(stage, renderer) {
    super(stage, renderer);
    this._during();
  }

  _during() {
    TweenMax.set('#ob2 #hand', {transformOrigin: "50% 100%", rotation: '-5_cw'});
    TweenMax.to('#ob2 #hand', 4, {
      rotation: "5_cw",
      ease: Power2.easeInOut,
      delay: 0,
      repeat: -1,
      yoyo: false,
      repeatDelay: 0
    });

    TweenMax.set('#ob2 #bouche', {transformOrigin: "50% 50%"});
    TweenMax.to('#ob2 #bouche', 1, {
      scaleX: "0.8",
      scaleY: "1.2",
      ease: Power2.easeInOut,
      delay: 0,
      repeat: -1,
      yoyo: true,
      repeatDelay: 0
    });

    TweenMax.to('#thoughtBubble', 2, {
      text: "This is the DEV you're looking for!",
      ease: Linear.easeNone, delay: 2, repeat: -1, yoyo: false, repeatDelay: 5
    });

    TweenMax.to('#startOver', 1, {
      y: 5,
      ease: Linear.easeNone, delay: 2, repeat: -1, yoyo: true, repeatDelay: 0
    });

  }

  in() {
    let tl = new TimelineMax();
    // tl.to("#dayBack", 1, {css:{opacity:0}, ease: Power3.easeOut}, 0);
    // tl.to("#contactBack", 1, {css:{opacity:1}, ease: Power3.easeOut}, 0);
    // //
    // for(let i=150; i>=0; i--) {
    //   tl.to(`#two_${i}`, 0.005, {fill: '#039BE5'});
    // }


    tl.to('#topHeader', 0.5, {css: {className: "-=works"}});
    tl.to('#topHeader', 0.5, {css: {className: "+=contact"}});

    tl.fromTo('#ob2', 0.5,
      {bottom: '-100%'},
      {bottom: '-5%'},
      0.5);

    // tl.to('#pocketWatch', 0.2, {css: {position: 'absolute'}});

    tl.fromTo('#startOver', 0.5, {opacity: 0}, {opacity: 1});
    return tl
  }

  out() {

  }
}

export default ContactScene;
