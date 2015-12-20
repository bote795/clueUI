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
      var skipped = [];
      console.log(origin);
      if(stoped == "NONE")
      {
        for (var i = 0; i < $scope.users.length; i++) {
          if($scope.users[i] != ask)
          {
            skipped.push($scope.users[i]);
          }
        }
      }
      else
      {
        var target = $scope.users.indexOf(stoped);
        console.log(target);
        // 3 > 1
        var index=origin;
        if(origin > target)
        {
          if (origin == $scope.users.length-1) 
          {
            index=0;
          }
          else
            index++;
          // 0 1 [2] 3 4
          for (var i = index; i < $scope.users.length && i != origin && i != target; i++) {
            skipped.push($scope.users[i])
            if (i+1 == $scope.users.length ) // it needs to reloop
            {
              i=-1;
            }
          }
        }
        else
        {
          index++;
          for (var i = index; i < $scope.users.length && i < target && i != origin; i++) {
            skipped.push($scope.users[i])
          }
        }

      }
      for (var i = 0; i < skipped.length; i++) {
        addToPossibilities(skipped[i], items);
      };
      console.log($scope.possibilities);
    }
    $scope.addToPossibilities = function(person,items) {
      var dict={};
      if (person in $scope.possibilities)
      {
        console.log("dont contain key:"+person)
        dict = $scope.possibilities[person]={"who": [], "what":[], "where":[]};
      }    
      else
        dict = $scope.possibilities[person];
      dict["who"].push(items[0]);
      dict["what"].push(items[1]);
      dict["where"].push(items[2]);
    }
  });