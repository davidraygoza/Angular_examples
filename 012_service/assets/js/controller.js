angular.module("ToDoList",["LocalStorageModule"])
.service('ToDoService',function(localStorageService){
  this.key="angular_todoLista";
  if(localStorageService.get(this.key)){
    this.activities=localStorageService.get(this.key);
  }else{
    this.activities=[];

  }
  this.addActivity=function(newActivity){
    this.activities.push(newActivity)
    this.updateLocalStorage();
  }
  this.updateLocalStorage=function(){
    localStorageService.set(this.key,this.activities);
  }
  this.clean=function(){
    this.activities=[];
    this.updateLocalStorage();
    return this.getAll();
  }
  this.getAll=function(){
    return this.activities;
  }
  this.removeItem=function(item){
    this.activities=this.activities.filter(function (activity) {
      return activity!==item;
    })
    this.updateLocalStorage();
    return this.getAll();
  }
})
.controller("ToDoController",function($scope,ToDoService){

  $scope.todo=ToDoService.getAll();
  $scope.addActivity=function(){
    ToDoService.addActivity($scope.newActivity);
    $scope.newActivity={};

  }
  $scope.removeActivity=function(item){
    $scope.todo=  ToDoService.removeItem(item);
  }
  $scope.cleanActivities=function(){
    $scope.todo=ToDoService.clean();

  }
});
