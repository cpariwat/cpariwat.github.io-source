class ParalaxObject extends PIXI.extras.TilingSprite {
  constructor(texture, width, height, posX, posY, delta) {
    super(texture, width, height);

    this.setPosition(posX, posY);
    this.delta = delta;

    this.tilePosition.x = 0;
    this.tilePosition.y = 0;
    this.isAnimating = false;
  }

  animate() {
    if(!this.isAnimating) return;
    this.tilePosition.x -= this.delta;
    //
    // this.isDown = (this.position.y > this.upDownRange[0] || this.position.y < this.upDownRange[1]) ? !this.isDown : this.isDown;
    // this.position.y = (this.isDown) ? (this.position.y - this.delta/2) : (this.position.y + this.delta/2);
  }

  setPosition(posX, posY) {
    this.position.x = posX;
    this.position.y = posY;

    this.upDownRange = [this.position.y +30 , this.position.y];
  }

  reScale(scale) {
    let newHeight = this.height*scale;
    this.scale.x = scale;
    this.scale.y = scale;
    this.position.y = window.innerHeight-newHeight;
  }
}

export {ParalaxObject as default};
