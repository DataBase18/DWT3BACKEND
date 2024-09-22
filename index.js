const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

/* 
{
    "name": "Abner",
    "DPI": 123,
    "email": "abnerraoficial@gmail.com",
    "password": "S2sdlkf@2JSLKDF2Jk$sj2f1s"
}
*/
let users = []

app.post("/register", function(request, response) {
    const newUser = request.body;

    const match = users.find(e => e.email === newUser.email);
    if(match){
        return response.status(404).json({ error: "Este email ya se encuentra registrado" }); 
    }else {
        users.push(newUser)
        return response.status(200).json(newUser); 

    }
});

app.post("/login", function(request, response) {
    const newUser = request.body;

    const match = users.find(e => ((e.email === newUser.email) && (e.password === newUser.password)));
    if(!match){
        return response.status(404).json({ error: "Usuario o contraseña incorrectos" }); 
    }else {
        users.push(newUser)
        return response.status(200).json(match); 
    }
});

app.listen(4000)