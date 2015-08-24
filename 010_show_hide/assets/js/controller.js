angular.module("HttpShowHide",[])
.controller("controllerShowHide",function($scope,$http){
  $scope.posts=[];
  $scope.newPost={};
  $scope.loading=true;
  $http.get("http://jsonplaceholder.typicode.com/posts")
  .success(function(data){
    $scope.posts=data;
    $scope.loading=false;
  })
  .error(function(err){
    $scope.loading=false
  });
  $scope.addPost=function(){
    $http.post("http://jsonplaceholder.typicode.com/posts",{
      title: $scope.newPost.title,
      body: $scope.newPost.body,
      userId:1
    })
    .success(function(data,status, header,config){
      $scope.posts.push($scope.newPost);
      $scope.newPost={};
    })
    .error(function(error,status, header,config){
      console.log(error);
    });
  }

});
