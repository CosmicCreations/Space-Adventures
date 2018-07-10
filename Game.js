window.onload = function () {
  var context, player, canvas,
    currentLevel, level1, level2, level3, level4, level5, changeLevel, music ;

  canvas = document.getElementById('myCanvas');
  context = document.querySelector("canvas").getContext("2d");

  context.canvas.height = 400;
  context.canvas.width = 800;

  player = initPlayer();
  level4 = initLevel4(player, null);
  level3 = initLevel3(player, level4);
  level2 = initLevel2(player, level3);
  level1 = initLevel1(player, level2);
  currentLevel = level1;

  music = new Audio("music.mp3");
  music.play();

  loop = function () {
    renderLevel(context, currentLevel);
    window.requestAnimationFrame(loop);
  };

  attachPlayerController(player);
  window.requestAnimationFrame(loop);

  function renderLevel(context, aLevel) {
    updatePlayer(aLevel.player, aLevel.ledges, aLevel.collectables, aLevel.healths, aLevel.enemies);

    context.drawImage(aLevel.background, 0, 0);

    for (var ledge of aLevel.ledges) {
      renderLedge(context, ledge);
    }
    for (var collectable of aLevel.collectables) {
      renderCollectable(context, collectable);
    }
    for (var enemy of aLevel.enemies) {
      renderEnemy(context, enemy);
    }
    for (var health of aLevel.healths) {
      renderHealth(context, health);
    }
    renderPlayer(context, aLevel.player);


    if (aLevel.player.score.points == aLevel.maxPoints) {
      resetController(aLevel.player.controller);
      if (currentLevel === level3) {
        window.alert("Congrats! You've completed the game!!");
      } else {
        window.alert("Congrats you've completed the level! Get ready for the next level!");
      }
      changeLevel(aLevel);
    }
  }

function restart(aLevel){
  if(aLife.num ==0){
    currentLevel = level1
  }
} 


  function changeLevel(aLevel) {
    console.log("level: " + aLevel.nextLevel);
    currentLevel = aLevel.nextLevel;

    resetPlayerPosition(aLevel.player)
  }
}
