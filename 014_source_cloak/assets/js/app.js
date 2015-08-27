angular.module("customDirective",[])
.controller("appCtrl",function($scope,$http){
  $http.get("https://api.github.com/users/davidraygoza/repos")
  .success(function(data){
    $scope.repos=data;

  })
  .error(function(err){
    console.log(err);
  })
});
