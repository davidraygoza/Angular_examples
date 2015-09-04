angular.module("customDirective",[])
.directive('backImg',function(){
  return function(scope,element,attrs){
    attrs.$observe('backImg',function(value){
      console.log("----->"+value);

      element.css({

        "background":"url("+value+")",
        "background-size":"cover",
        "background-position":"center",
        "width":"100px",
        "height": "100px",
        "border-radius": "50%"
      });
    });
  }
})
.controller("appCtrl",function($scope,$http){
  $http.get("https://api.github.com/users/davidraygoza/repos")
  .success(function(data){
    $scope.repos=data;

  })
  .error(function(err){
    //console.log(err);
  })
});
