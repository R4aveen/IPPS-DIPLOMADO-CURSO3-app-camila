import express from "express";
const app = express();
app.use(express.json());

const autos = [];

app.get('/autos', (req, res) => {
    res.json(autos) 
});

app.post('/autos', (req, res) => {
    autos.push(req.body)
    res.status(201).json(req.body)
});


app.listen(3000, ()=> console.log('puerto corriendo'));