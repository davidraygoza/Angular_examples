angular.module("MyFirstApp",[])
.controller("FirstController",["$scope",function(m){
  m.nombre="David";
  m.nuevoComentario={};
  m.comentarios=[{
    comentario:"Buen tutorial",
    username:"david"
  },{
    comentario:"No le creo al expositor",
    username:"ELchidoGuan"
  }
  ];
  m.agregarComentario= function(){
    m.comentarios.push(m.nuevoComentario);
    m.nuevoComentario={};
  }
}]);
