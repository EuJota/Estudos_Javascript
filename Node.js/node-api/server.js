const express = require('express');

const port = 3001;
const app  = express(); //a constante app recebe a função express


//rota
app.get('/', (req, res)=>{
    res.send("Hello world");
}); //a constante app acessa a função get, que é um objeto da função express e passa os parâmetros

app.get('/users', (req, res)=>{
    res.json([
        {
         "name":"joao",
         "idade": "21"   
        },
        {
         "name":"naojoao",
          "idade": "22"
        }
        ]);
});

app.listen(port, ()=>console.log(`Listen port ${port}`));