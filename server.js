const express=require('express')
const path=require('path')
const products=require("products")
const app=express()
const PORT=process.env.PORT||4000
app.get('/',(req,res)=>
{
    res.send("hello")
})
app.get('/c',(c,d)=>
    {
        const pathURL=path.join(__dirname,'views','c.txt')
        d.sendFile(pathURL)
    })
    app.get('/h',(a,b)=>
        {
            b.send("<h1>linkhtml</h1> <a href '/api/products'>prod</a>")
        })
        app.get('/api/products',(req,res)=>{
            res.json(products)
        })

app.listen(PORT,()=>console.log(`server running on port${PORT}`))