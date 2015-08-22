angular.module("AppFilters",[])
.filter("removeHtml",function(){
  return function(texto){
    return String(texto).replace(/<[^>]+>/gm,'');
  }

})
.controller("controllerFilter",function($scope){
  $scope.my_html="<p>Hola  Mundo</p>";
  $scope.json_object={};
  $scope.json_object.title="Title";
  $scope.json_object.body="Body of the object";
  $scope.cost=2;
});
