class Form {

    constructor(){
        this.input= createInput("Name")
        this.button = createButton('Play')
        this.greeting = createElement('h1')
        this.title = createElement('h2')
        this.reset = createButton('Reset')
    }
    hide(){
this.greeting.hide()
this.button.hide()
this.input.hide()
this.title.hide()

    }
    display(){
this.title.html("Candy Blitz")
this.title.position(displayWidth/2,displayHeight/2-50)
this.input.position(displayWidth/2,displayHeight/2+50)
this.button.position(displayWidth/2,displayHeight/2+100)
this.reset.position(displayWidth/2+500,displayHeight/2-500)

this.button.mousePressed(()=>{
this.input.hide()
this.button.hide()
player.name = this.input.value()
playerCount += 1;
player.index = playerCount
player.update()
player.updateCount(playerCount)
this.greeting.html("Hello" + player.name)
this.greeting.position(300,200)
})

this.reset.mousePressed(()=>{
    game.update(0)
    player.updateCount(0)
    
    gameState=0
})

    }
}