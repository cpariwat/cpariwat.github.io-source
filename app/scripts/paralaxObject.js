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
  }

  setPosition(posX, posY) {
    this.position.x = posX;
    this.position.y = posY;
  }

  reScale(scale) {
    let newHeight = this.height*scale;
    this.scale.x = scale;
    this.scale.y = scale;
    this.position.y = window.innerHeight-newHeight;
  }
}

export {ParalaxObject as default};
