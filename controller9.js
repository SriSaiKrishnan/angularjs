var application = angular.module('apps5',[]);

application.controller('app5', function($scope){
    $scope.tasks = [];
    
    var taskData = localStorage['taskList'];
    
    if(taskData != undefined){
        $scope.tasks = JSON.parse(taskData);
    }
    
    $scope.searchEnter = function(){
        if(event.which == 13 && $scope.task != ""){
            $scope.addTask();
        }
    };
     $scope.addTask = function(){
        $scope.tasks.push({'taskMessage' : $scope.task, 'status' : 'false'});
        $scope.task = "";
        localStorage['taskList'] = JSON.stringify($scope.tasks);
     };
    $scope.contentEdit = function(msg){
        for(var i = 0; i<$scope.tasks.length; i++){
            if($scope.tasks[i].taskMessage == msg){
                $scope.tasks[i].taskMessage = event.target.innerText;
            }
        }
        console.log($scope.tasks);
         localStorage['taskList'] = JSON.stringify($scope.tasks);
       event.target.contentEditable =  event.target.contentEditable == 'false' ? 'true' : 'false';
    };
    $scope.enterAgain = function(msg){
         if(event.which == 13 && msg != ""){
            $scope.contentEdit(msg); 
         }
    }
});