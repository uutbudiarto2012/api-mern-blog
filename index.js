const express = require('express')

const app = express()
app.use(()=>{
    console.log('HELLO SERVER')
})

app.listen(4000)