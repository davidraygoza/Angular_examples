var app=angular.module("MyFirstApp",[]);
app.controller("FirstController",function($scope){
  $scope.nombre="David";
  $scope.nuevoComentario={};
  $scope.comentarios=[{
    comentario:"Buen tutorial",
    username:"david"
  },{
    comentario:"No le creo al expositor",
    username:"ELchidoGuan"
  }
  ];
  $scope.agregarComentario= function(){
    $scope.comentarios.push($scope.nuevoComentario);
    $scope.nuevoComentario={};
  }
});
