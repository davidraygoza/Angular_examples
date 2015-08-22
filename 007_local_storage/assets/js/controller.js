angular.module("ToDoList",["LocalStorageModule"])
.controller("ToDoController",function($scope,localStorageService){
  if(localStorageService.get("angular-todolist")){
    $scope.todo=localStorageService.get("angular-todolist");
  }else{
    $scope.todo=[];

  }
  $scope.$watch("todo",function(newValue,oldValue){
  //  $scope.$watch('myCollection', function(value, oldValue)
      localStorageService.set("angular-todolist",$scope.todo);
  },true);
  $scope.addActivity=function(){
    $scope.todo.push($scope.newActivity);
    $scope.newActivity={};

  }
  $scope.cleanActivities=function(){
    $scope.todo=[];


  }
});
