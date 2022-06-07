const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.json({type: 'aplication/vnd.api+json'}));
app.use(cors());

const port = process.env.PORT || 3000;

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/inde.html'));
});

app.listen(port,() => console.log(`Estou escutando na porta  ${port}`));