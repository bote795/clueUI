angular.module('clueApp', [])
    .controller('ClueListController', function() {
    var clueList = this;
    clueList.inputComplete = false;
    //list of possible who
    clueList.who = ["Green","Mustard","Peacock(Blue)","Plum","Scarlet","White"];
    //list of possible what?
    clueList.what = ["Wrench","Candlestick", "Dagger", "Pistol","Lead Pipe","Rope"];
    //list of possible wheres
    clueList.where =["Bathroom","Office","Dining Room","Game Room","Garage","Bedroom","Living Room","Kitchen","Courtyard"];
    //list of options for player
    clueList.options= ["skip", "stoped", "None"];
    //number of players
    clueList.num=3;
    //player names
    clueList.users=[];
    //turn count
    clueList.turn=1;
    //keys
    clueList.keys=[];

    clueList.detectiveClues=[];
    clueList.setNum = function(){
      clueList.num = clueList.typed;
    };

    clueList.addUser = function() {
      clueList.users.push(clueList.username);
      console.log(clueList.username);
      clueList.username = "";
      clueList.keys.push(clueList.id(clueList.users.length))
      if(clueList.users.length == clueList.num)
        {clueList.inputComplete = true;}
    };
    

 
    clueList.addClue = function(form) {
      console.log(form);
      var temp =[clueList.turn,
      form.player, form.who_clue ,form.what_clue,
      form.where_clue];
      clueList.detectiveClues.push(temp);
      console.log(clueList.detectiveClues);
      for (var i = 1; i <= clueList.users.length; i++) {
        var id="player"+i;
        temp.push(form[id]);
      };
      //save row
      clueList.turn++;
    };
    clueList.id = function(num){
      return "player"+num;
    }
  });