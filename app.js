const express = require('express')

const app = express();
app.get('/', (req, res) => {
    res.json({resp:'ok'})
})

app.listen(3000)