var myFrameRate = 30,
    timeIncrement = 1 / myFrameRate,
    currentTime = 0,
    score = 0,
    floopyBard,
    myPipe,
    pipes = [],
    gameOver
function setup(){
  createCanvas(800, 600)
  floopyBard = new bird()



}

function displayScoreTime(){
  textSize(32)
  text("Score: " + score, width - 150, 60)
  text("Time: " + currentTime, width - 170, 120)
}

function keyPressed(){
  if (keyCode == "32"){
    floopyBard.flap()
  }
}
function pipeWork(){
  for(i=0; i < pipes.length; i++){
    pipes[i].draw()
    pipes[i].move()
    pipes[i].collision(floopyBard)
  }
}
function scoresGameOver(){
  gameOver = false
  for (i=0; i<pipes.length; i++){
    if (pipes[i].collision(floopyBard) == false){
      score += 1
    }
    else if (pipes[i].collision(floopyBard) == true){
     for (i=0; i<pipes.length; i++){
        pipes[i].xSpeed = 0

      }
      textSize(50)
      text("Game Over", width/2, height/2)
      gameOver = true

    }
  }
}
function draw(){
  frameRate(myFrameRate)
  currentTime += timeIncrement
  if (frameCount % (2*myFrameRate) == 0 && gameOver == false){
    pipes.push(new pipe)
  }

  background(82,219,255)
  pipeWork()
  displayScoreTime()
  scoresGameOver()
  floopyBard.draw()
  floopyBard.fly()


  console.log("illy")
}
