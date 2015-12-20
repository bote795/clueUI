angular.module('clueApp', [])
    .controller('ClueListController', function($scope) {
    $scope.inputComplete = false;
    //list of possible who
    $scope.who = ["Green","Mustard","Peacock(Blue)","Plum","Scarlet","White"];
    //list of possible what?
    $scope.what = ["Wrench","Candlestick", "Dagger", "Pistol","Lead Pipe","Rope"];
    //list of possible wheres
    $scope.where =["Bathroom","Office","Dining Room","Game Room","Garage","Bedroom","Living Room","Kitchen","Courtyard"];
    //list of options for player
    $scope.options= ["skip", "stoped", "None"];
    //number of players
    $scope.num=3;
    //player names
    $scope.users=[];
    //turn count
    $scope.turn=1;
    //current clues
    $scope.detectiveClues=[];
    //dicts of data
    $scope.possibilities={};

    $scope.setNum = function(clueList){
      $scope.num = clueList.typed;
    };

    $scope.addUser = function(clueList) {
      $scope.users.push(clueList.username);
      console.log(clueList.username);
      clueList.username = "";
      $scope.keys.push($scope.id($scope.users.length))
      if($scope.users.length == $scope.num)
        {$scope.inputComplete = true;}
    };
    

 
    $scope.addClue = function(form) {
      console.log(form);
      var temp =[$scope.turn,
      form.player, form.who_clue ,form.what_clue,
      form.where_clue,form.stoped];
      var items = [form.who_clue, form.what_clue ,form.where_clue];
      
      $scope.detectiveClues.push(temp);
      console.log($scope.detectiveClues);
      $scope.none(form.player, form.stoped, items);
      //save row
      $scope.turn++;
    };

    $scope.none = function(ask,stoped,items){
      var origin = $scope.users.indexOf(ask);
      if(stoped == "NONE")
      {
         addToPossibilities(person,itmes)
      }
      var target = $scope.users.indexOf(stoped);

    }
    $scope.addToPossibilities = function(person,items) {
      var dict={};
      if (person in $scope.possibilities)
      {
        console.log("dont contain key:"+person)
        dict = $scope.possibilities[person]={"who": [], "what":[], "where":[]};
      }    
      dict["who"].push(items[0]);
      dict["what"]push(items[1]);
      dict["where"]push(items[2]);
    }
  });