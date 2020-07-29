var app = angular.module('apps4', []);

app.service('random', function(){
    var num = Math.floor(Math.random()*10);
    this.generate = function(){
        return num;
    };
});

app.controller('app4',function($scope, random){
    $scope.generateRandom = function(){
        $scope.myRandomNumber = random.generate();
    };
    
});