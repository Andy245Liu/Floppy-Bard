function bird(){
  this.x = 80
  this.y = height/2
  this.size = 40

  this.lift = 0
  this.gravity = 0.5
  this.ySpeed = 0

  this.draw = function(){
    fill(255, 0, 0)
    ellipse(this.x, this.y, this.size)//only need 1 radius parameter to draw a circle ellipse
  }
  this.fly = function(){
    this.ySpeed += this.lift + this.gravity
    this.y += this.ySpeed
    this.lift = 0
    if (this.y < this.size / 2){
      this.ySpeed = 0
      this.y = this.size / 2
    } else if(this.y > height - this.size/2){
      this.ySpeed = 0
      this.y = height - this.size / 2

    }
  }
  this.flap = function(){
    if(this.ySpeed >= -5) {
      this.lift -= 8
    }

}
}
