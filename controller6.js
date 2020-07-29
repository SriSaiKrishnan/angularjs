var application = angular.module('apps3',[]);
application.controller('app3', function($scope){
    $scope.myRandomNumber = Math.random();
    document.querySelector('input').addEventListener('click', function(){
        $scope.myRandomNumber = Math.random();
        $scope.$digest();
    }, false);
});