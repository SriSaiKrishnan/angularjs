var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
           $routeProvider
           .when('/',{
           templateUrl : "page.html"
           })
            .when('/helloUser',{
               templateUrl : "hellouser.html"
            })
            .otherwise({
                redirectTo: '/'
            });
           });