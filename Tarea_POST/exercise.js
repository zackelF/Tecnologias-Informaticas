
const express =require("express");
const bodyParser=require("body-parser");
var app=express();
var puerto=3000;


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/',function(req,res){
res.sendfile("index.html");//cambiar
});
app.post('/Analizar',function(req,res){

var user_name=req.body.nombre;
var password=req.body.clave;
console.log("user name="+ user_name+",password is "+ password);
res.json({'Iniciado correctamente' : user_name})

});


app.listen(puerto,function(){
  console.log('Servidor web escuchando en el puerto '+ puerto);
});

