'use strict';
import {TimelineMax} from "gsap";
import WelcomeScene from './scenes/welcomeScene';
import WorksScene from './scenes/worksScene';
import ContactScene from './scenes/contactScene';
import Overlay from './overlay';

// Required to import Plugins even though never called
import TextPlugin from 'gsap/TextPlugin';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

import {BASE_WIDTH} from 'constants';
const SECTIONS = ["#welcome", "#works", "#contact-me"];
const SECTION_NAMES = ['Home', 'Work', 'Contact'];
const SECTION_COLORS = [ '#fff', '#c90a00', '#6A4A3C'];

class Engine {
  constructor() {
    this.isForward = true;

    this.transitionState = 0;
    location.href = SECTIONS[this.transitionState];
    this.targetSection = SECTIONS[this.transitionState];


    let app = new PIXI.Application(
      BASE_WIDTH,
      window.innerHeight,
      {
        view: document.getElementById('main-canvas'),
        transparent: true,
        sort: true
      }
    );
    this.stage = app.stage;
    this.renderer = app.renderer;
    this.animateList = [];

    // Update the this.renderer dimensions
    this.renderer.resize(window.innerWidth,
      window.innerHeight);

    // animate
    app.ticker.add(() => {
      this.animateList.map((animateObject) => {
        animateObject.animate();
      });

      // add progress cursor on active
      if (this.mainTimeline && this.mainTimeline.isActive()) {
        document.body.classList.add('is-animating');
      } else {
        document.body.classList.remove('is-animating');
      }
    });


    this._bindResize();
    this._bindTransition();
    this._bindPlayElems();
    this._bindPocketWatch();

    let overlay = new Overlay();
    overlay.initOverlay();

    $('.background-container').css("width", document.getElementById('overlayObject').scrollWidth);
  }

  run() {
    // loading screen
    let loader = PIXI.loader;

    loader
      .add('back', 'images/back.svg')
      .add('mid', 'images/mid.svg');

    loader.load((loader, resources) => {
      this.transitionState = 0;
      this.mainTimeline = new TimelineMax();

      let welcomeScene = new WelcomeScene(this.stage, this.renderer, resources, this.animateList);
      this.mainTimeline.add(welcomeScene.in(2));
      this.mainTimeline.addPause('#welcome');
      this.mainTimeline.add(welcomeScene.out(1));
      this.mainTimeline.addPause('end-state-1', this._changeStage());
      let worksScene = new WorksScene(this.stage, this.renderer);
      this.mainTimeline.add(worksScene.in());
      this.mainTimeline.addPause('#works', ()=> { this._transitionToTarget(); });
      this.mainTimeline.add(worksScene.out());
      this.mainTimeline.addPause('end-state-2', this._changeStage());
      let contactScene = new ContactScene(this.stage, this.renderer, this.mainTimeline);
      this.mainTimeline.add(contactScene.in());
      this.mainTimeline.addPause('#contact-me');
    });
  }


  _bindPlayElems() {
    $('.go-next').click(() => {
        this.targetSection = SECTIONS[this.transitionState + 1];
        this._forward();
    });

    $('.mdl-navigation__link').click((e) => {
      e.preventDefault();
      if (!this.mainTimeline.isActive()) {
        this.targetSection = e.target.getAttribute("href");
        // this._transitionToTarget();
        this.transitionState = SECTIONS.indexOf(this.targetSection);
        location.href = this.targetSection;
        document.getElementById('headerTitle').innerHTML = SECTION_NAMES[this.transitionState];
        $("meta[name='theme-color']").attr('content', SECTION_COLORS[this.transitionState]);
        this.mainTimeline.seek(this.targetSection+"-=0.05");
      }
    });
  }

  _bindResize() {
    window.onresize = () => {
      location.reload();
    };
  }

 _bindPocketWatch() {
   let pocketWatchTl = new TimelineMax({repeat: -1, repeatDelay: 0});

   pocketWatchTl.set('#pocketWatch', {transformOrigin: "50% 0%", rotation: '9_ccw'});
   pocketWatchTl.set('#pocketWatch #shortHand', {transformOrigin: "50% 100%"});
   pocketWatchTl.set('#pocketWatch #longHand', {transformOrigin: "50% 100%"});

   pocketWatchTl.to('#pocketWatch', 1.5, {
     rotation: "-9_ccw",
     ease: Power2.easeInOut,
     delay: 0,
     repeat: -1,
     yoyo: true,
     repeatDelay: 0
   }, 0);

   pocketWatchTl.to('#pocketWatch #shortHand', 30, {rotation: '360_cw', ease: Power0.easeNone, delay: 0, repeat: -1, yoyo: false, repeatDelay: 0}, 0);
   pocketWatchTl.to('#pocketWatch #longHand', 15, {rotation: '360_cw', ease: Power0.easeNone, delay: 0, repeat: -1, yoyo: false, repeatDelay: 0}, 0);

   let pocketWatch = document.getElementById('pocketWatchWrapper');
   pocketWatch.addEventListener("click", () => {
     pocketWatchTl.pause();

     $('#pocketWatchWrapper').css({"position": "fixed"});

     let timeTravelTl = new TimelineMax();

     timeTravelTl.set('#pocketWatch', {rotation: '0_ccw'});
     timeTravelTl.to('#pocketWatch #shortHand, #pocketWatch #longHand', 1, {rotation: '0_ccw'}, 0.5);
     timeTravelTl.fromTo('#pocketWatch', 1, {x:-1}, {x:1, ease:RoughEase.ease.config({strength:8, points:20, template:Linear.easeNone, randomize:false}) , clearProps:"x"}, 0.5);

     timeTravelTl.to('#pocketWatch #shortHand', 1, {rotation: '-360_ccw', ease: Power0.easeNone, delay: 0, repeat: 2, yoyo: false, repeatDelay: 0}, 1);
     timeTravelTl.to('#pocketWatch #longHand', 0.5, {rotation: '-360_ccw', ease: Power0.easeNone, delay: 0, repeat: 4, yoyo: false, repeatDelay: 0}, 1);

     timeTravelTl.fromTo('#pocketWatchWrapper', 1,
       {top: '0%'},
       {top: '-100%'},
       4);

     let currentDuration = this.mainTimeline.duration(); //gets current duration

     setTimeout(()=>{
       this.mainTimeline.duration(3); //adjusts the timeScale of myAnimation so that it fits into exactly 10 seconds on its parent timeline
       this.targetSection = SECTIONS[0];

       this._transitionToTarget();
     }, 1500);

     setTimeout(()=>{
       this.mainTimeline.duration(currentDuration);
       pocketWatchTl.play();
       $('#pocketWatchWrapper').css({"position": "absolute","top": "0"});
     }, 5000);

   });
 }

  _bindTransition() {
    let _scrollTimeout = null;

    $('#content-container').on('DOMMouseScroll mousewheel', (event) => {
      clearTimeout(_scrollTimeout);

      _scrollTimeout = setTimeout(() => {
        if (!this.mainTimeline.isActive()) {
          let target = (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) ? SECTIONS[this.transitionState + 1] : this.targetSection = SECTIONS[this.transitionState - 1];

          if (target) {
            this.targetSection = target;
            this._transitionToTarget();
          }
        }
      }, 250);
      return false;
    });

    let _addNewSwiper = (element) => {
      // get a reference to an element
      let manager = new Hammer.Manager(document.querySelector(element));
      manager.add(new Hammer.Swipe({direction: Hammer.DIRECTION_VERTICAL}));
      manager.on('swipeup', (e) => {
        if (!this.mainTimeline.isActive()) {
          let target = SECTIONS[this.transitionState + 1];

          if (target) {
            this.targetSection = target;
            this._transitionToTarget();
          }
        }
      });
      manager.on('swipedown', (e) => {
        if (!this.mainTimeline.isActive()) {
          let target = SECTIONS[this.transitionState - 1];

          if (target) {
            this.targetSection = target;
            this._transitionToTarget();
          }
        }
      });
    };

    _addNewSwiper('#mainContent');
    _addNewSwiper('#workContent');
  }

  _transitionToTarget() {
    let targetState = SECTIONS.indexOf(this.targetSection);
    let difference = targetState - this.transitionState;

    if (difference < 0) {  // previous section
      this._backward();
    } else if (difference > 0) { // following section
      this._forward();
    } else {
      // same section. do nothing
      return true;
    }
  }

  _forward() {
    this.isForward = true;

    if (this.transitionState < SECTIONS.length - 1) {
      this.mainTimeline.play();
    }
  }

  _backward() {
    this.isForward = false;

    if (this.transitionState > 0) {
      this.mainTimeline.reverse();
    }
  }

  _changeStage() {
    let _goNext = () => {
      if (this.transitionState < SECTIONS.length - 1) {
        this.mainTimeline.play();
        location.href = SECTIONS[++this.transitionState];
      }
    };

    let _goBack = () => {
      if (this.transitionState > 0) {
        location.href = SECTIONS[--this.transitionState];
        this.mainTimeline.reverse();
      }
    };

    return () => {
      if (this.isForward) {
        _goNext();
      } else {
        _goBack();
      }

      document.getElementById('headerTitle').innerHTML = SECTION_NAMES[this.transitionState];
      $("meta[name='theme-color']").attr('content', SECTION_COLORS[this.transitionState]);
    };

  }
}

export default Engine;
