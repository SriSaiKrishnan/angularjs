var app = angular.module('apps2',[]);

app.controller('app2', function($scope){
    $scope.counter = -1;
    $scope.$watch('myText', function(newValue, oldValue){
       console.log(newValue);
        console.log(oldValue);
        $scope.counter++;
    });
});