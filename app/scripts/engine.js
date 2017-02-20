'use strict';
import {TimelineMax} from "gsap";
import WelcomeScene from './scenes/welcomeScene';
import PowerScene from './scenes/powerScene';
import ContactScene from './scenes/contactScene';

import {BASE_WIDTH} from 'constants';
const SECTIONS = ["#welcome", "#power", "#contact-me"];
class Engine {
  constructor() {
    this.stage = new PIXI.Container();
    this.renderer = PIXI.autoDetectRenderer(  // autodetect the SIZE
      BASE_WIDTH,
      window.innerHeight,
      {
        view: document.getElementById('main-canvas'),
        transparent: true
      }
    );

    this.transitionState = 0;
    this.animateList = [];
    this.mainTimeline = new TimelineMax();

    let welcomeScene = new WelcomeScene(this.stage, this.renderer, this.animateList);
    this.mainTimeline.add(welcomeScene.in(2));
    this.mainTimeline.addPause();
    this.mainTimeline.add(welcomeScene.out(1));
    this.welcomeScene = welcomeScene;

    let powerScene = new PowerScene(this.stage, this.renderer, this.animateList);
    this.mainTimeline.add(powerScene.in(1));
    this.mainTimeline.addPause();
    powerScene.out(2, 6, this.mainTimeline);

    let contactScene = new ContactScene(this.stage, this.renderer, this.animateList);
    contactScene.in(2, 8, this.mainTimeline);
    this.mainTimeline.addPause();
    contactScene.out(2, 10, this.mainTimeline);

    this._bindTransition();
    this._animate();
  }

  _animate() {
    let _update = () => {
      this.animateList.map((animateObject) => {
        animateObject.animate();
      });

      this.renderer.render(this.stage);

      requestAnimationFrame(_update);
    };

    requestAnimationFrame(_update);
  }

  _bindTransition() {
    let _scrollTimeout = null;
    let _transition = (e) => {
      clearTimeout(_scrollTimeout);
      _scrollTimeout = setTimeout(()=> {
        console.log(this.transitionState)
        if(e.wheelDelta < 0){
          if(this.transitionState < SECTIONS.length-1) {
            location.href = SECTIONS[++this.transitionState];
            this.welcomeScene.next();
            this.mainTimeline.play();
          }
        }else {
          if(this.transitionState > 0) {
            location.href = SECTIONS[--this.transitionState];
            this.mainTimeline.reverse();
            // this.welcomeScene.animate();
          }
        }
      }, 250);
      return false;
    };
    let screen = document.getElementById("content-container");
    screen.addEventListener("mousewheel", _transition);
    screen.addEventListener("DOMMouseScroll", _transition);
  }
}

export default Engine;
