angular.module("ToDoList",["LocalStorageModule"])
.controller("ToDoController",function($scope,localStorageService){
  if(localStorageService.get("angular-todolist")){
    $scope.todo=localStorageService.get("angular-todolist");
  }else{
    $scope.todo=[];

  }
  $scope.addActivity=function(){
    $scope.todo.push($scope.newActivity);
    $scope.newActivity={};
    localStorageService.set("angular-todolist",$scope.todo);
  }
  $scope.cleanActivities=function(){
    $scope.todo=[];
    localStorageService.set("angular-todolist",$scope.todo);

  }
});
