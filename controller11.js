var app = angular.module('apps7',[]);

app.directive('myFirstDirective', function(){
    function linkFunction($scope, elem, attr){
        $scope.name = "Hello World"
        $scope.changeName = function(newName){
            $scope.name =  $scope.controllerProperty; 
        }
    }
   return{
      template : '<span ng-click = "changeName()">Current Text is: {{name}}',
      restrict : "EA",
    //scope : true,
       scope : {},
      link : linkFunction   
   } 
});

app.controller('app7', function($scope){
    $scope.controllerProperty = "This is Scope Property"
});