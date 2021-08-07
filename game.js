class Game {

constructor(){
}
getState(){
var gameStateRef = database.ref('gameState')
gameStateRef.on("value",function(data){
    gameState =data.val()
})
}
update(state) {
    database.ref('/').update({
        gameState: state
    });
}
 async start() {
    if (gameState === 0) {
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if (playerCountRef.exists()) {
            playerCount = playerCountRef.val();
            player.getCount();
        }
        form = new Form()
        form.display();}
    
player1 = createSprite(200,500);
player1.addImage("player1",player1Img);

player2 = createSprite(800,500);
player2.addImage("player2", player2Img);
players=[player1,player2];

}
play(){

form.hide()
Player.getPlayerInfo()


var index = 0
var x=200
var y=200
drawSprites()
for(var plr in allPlayers){

    index=index+1
    x=500-allPlayers[plr].distance
    y=500
    players[index-1].x = x;
    players[index-1].y = y;

    if(index === player.index){ 
        fill("black"); 
        textSize(25); 
        text(allPlayers[plr].name ,x-25,y+25);
     } 
        textSize(25); 
        fill("white"); 
        text("Player 1 :" +allPlayers.player1.score,50,50); 
        text("Player 2 :" + allPlayers.player2.score, 50, 100); 
    }
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
      if(player.distance > 1000){
        gameState = 2;
        
      }
      if (frameCount % 20 === 0) {
        candy = createSprite(random(100,1000 ), 0, 100, 100);
        candy.velocityY = 6;
        var rand = Math.round(random(1,6));
        switch(rand){
            case 1: candy.addImage("candy",candy1Img);
            break;
            case 2: candy.addImage("candy", candy2Img);
            break;
            case 3: candy.addImage("candy", candy3Img);
            break;
            case 4: candy.addImage("candy", candy4Img);
            break;
            case 5: candy.addImage("candy", candy5Img);
            break;
            case 6: candy.addImage("candy", candy6Img);
            break;
        }
        candyGroup.add(candy);
    
    }
      if (player.index !== null) {
        for (var i = 0; i < candyGroup.length; i++) {
            if (candyGroup.get(i).isTouching(players)) {
                candyGroup.get(i).destroy();
                player.update();
             
                
            }
            
        }
      
}


}
end(){
    gameState=0
   }
}