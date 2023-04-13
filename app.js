const express = require('express')

const app = express();
app.get('/', (req, res) => {
    res.json({resp:'ok'})
})
app.get('/animales',(req, res)  => {
    res.json({resp:'mascotas'})
})
app.listen(process.env.PORT || 3000)