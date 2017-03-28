import {TweenMax} from "gsap";

class Star extends PIXI.Sprite {
  constructor(texture, scale) {
    super(texture);
    this.originalScale = this.scale.x = this.scale.y = scale;
    this.velocity = {x: 1, y: 1};
    this.isFadeOut = true;
    this.isAnimating = true;
    this.shineSpeed = Math.random() * (0.02- 0.001) + 0.001;
    // this.infiniteShiningTween =
    //   TweenMax.to(this, 2, {alpha:1, repeatDelay:this.shineSpeed, repeat:-1, yoyo:true}, startAt);

    this.putOnTheSky();
  }

  setPosition(posX, posY) {
    this.position.x = posX;
    this.position.y = posY;
  }

  animate() {
    this.isFadeOut = (this.alpha < 0 || this.alpha > 1) ? !this.isFadeOut : this.isFadeOut;
    this.alpha = (this.isFadeOut) ? (this.alpha - this.shineSpeed) : (this.alpha + this.shineSpeed);
 }

  fall(){
    let fallTween = TweenMax.to(this, 1, {x: this.position.x - 100, y: this.position.y + 100});
    let fadeTween = TweenMax.to(this.scale, 1, {x: 0, y: 0});
    return [fallTween, fadeTween];
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
