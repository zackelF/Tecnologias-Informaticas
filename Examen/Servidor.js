
const express =  require("express");
const bodyParser = require("body-parser");
var app = express();


app.use(express.static('assets'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.route("/youtube")
.post((req,res)=> {
    var canal = req.body;
    console.log("Objeto post recibido");
    console.log(canal);
    archivos.writeFileSync('Busqueda.json', JSON.stringify(canal));
    res.json({'status' : 'OK'});
  })

app.get('/',function(req,res){
    res.sendfile("index.html");
    
  });


app.listen(3000,function(){
    console.log("Started on PORT 3000");
  })

