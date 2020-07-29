var app = angular.module('apps4', []);

app.service('random', function(){
    var randomObject = {}
    var num = Math.floor(Math.random()*10);
   randomObject= function(){
        return num;
    };
    return randomObject;
});

app.controller('app4',function($scope, random){
    $scope.generateRandom = function(){
        $scope.myRandomNumber = random.generate();
    };
    
});