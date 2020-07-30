var app = angular.module('apps6',[]);

app.filter('base',function(){
    var something = function(input , base){
        var parsed = parseInt(input,10);
        var based = parseInt(base,10);
        if(isNaN(parsed) || isNaN(based) || based<2 || based>36 ) return input;
        
        return parsed.toString(based);
    };
    return something;
});

app.controller('app6', function(){
    
});