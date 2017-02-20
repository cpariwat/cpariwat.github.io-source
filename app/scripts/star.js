import {TweenMax} from "gsap";
class Star extends PIXI.Sprite {
  constructor(texture, scale) {
    super(texture);
    this.originalScale = this.scale.x = this.scale.y = scale;
    this.velocity = {x: 1, y: 1};
    this.shineSpeed = Math.random() * (2 - 1);
    this.isFadeOut = true;
    this.isAnimating = true;

    let startAt = Math.random() * (1 - 0);
    this.infiniteShiningTween = TweenMax.to(this, 2, {alpha:1, repeatDelay:this.shineSpeed, repeat:-1, yoyo:true}, startAt);

    this.putOnTheSky();
  }

  setPosition(posX, posY) {
    this.position.x = posX;
    this.position.y = posY;
  }

  shine() {
    // if(!this.isAnimating) return;
    // this.isFadeOut = (this.alpha < 0 || this.alpha > 1) ? !this.isFadeOut : this.isFadeOut;
    // this.alpha = (this.isFadeOut) ? (this.alpha - this.shineSpeed) : (this.alpha + this.shineSpeed);
    this.infiniteShiningTween.play();
 }

  unshine(at) {
    this.infiniteShiningTween.pause(at);
  }

  fall(){
    if(!this.fallTween) {
      this.fallTween = TweenMax.to(this, 1, {x: this.position.x - 100, y: this.position.y + 100, alpha: 0});
    }
    return this.fallTween;
  }

  putOnTheSky() {
    let minX = 0, maxX = window.innerWidth;
    let minY = 0, maxY = window.innerHeight;
    let posX = Math.floor(Math.random() * (maxX - minX)) + minX;
    let posY = Math.floor(Math.random() * (maxY - minY)) + minY;
    this.alpha = 0;
    this.setPosition(posX, posY);
  }
}

export default Star;
