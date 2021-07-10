const express = require('express')

const app = express()
app.use(()=>{
    console.log('HELLO PORT 4000')
    console.log('HELLO PORT')
    console.log('HELLO PORT')
})

app.listen(4000)