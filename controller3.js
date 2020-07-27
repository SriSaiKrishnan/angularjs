var app = angular.module('app', []);
app.controller('dataa', function($scope, $http){
    $http.get('https://reqres.in/api/users?page=2')
    .success(function(response){
        $scope.datas = response.data;
    });
});