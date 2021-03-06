class Form{
    constructor(){

        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h2');

    }
    hide(){
        this.input.hide();
        this.button.hide(); 
        this.greeting.hide();
    }
display(){

    var title = createElement('h1');
    title.html("Car Racing Game");
    title.position(520,0);

    this.input.position(540,200);

    this.button.position(580,300);


    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
     
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;

        player.update();
        player.updateCount(playerCount);

        this.greeting.html("Hello " + player.name)
        this.greeting.position(130, 100);
      });

}
}
/*players
    player1
        name: Ayush
        distance: 0
    player2
        name: Rakhi
        distance: 0
        */