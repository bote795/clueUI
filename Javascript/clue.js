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
    clueList.options= ["skip", "stoped"];
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
      clueList.keys.push(clueList.id(clueList.users.length+1))
      if(clueList.users.length == clueList.num)
        {clueList.inputComplete = true;}
    };
    

 
    clueList.addClue = function() {
      var temp =[clueList.turn,
      clueList.player, clueList.who_clue ,clueList.what_clue,
      clueList.where_clue];
      clueList.detectiveClues.push(temp);

      for (var i = 0; i < clueList.users.length; i++) {
        var id="player"+clueList.users[i];
        temp.push(clueList[id]);
      };
      //save row
      clueList.turn++;
    };
    clueList.id = function(num){
      return "player"+num;
    }
  });