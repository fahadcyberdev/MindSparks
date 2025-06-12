import express from 'express'
import 'dotenv/config'
import cors from 'cros'

const app = express();



// middlewares

app.use(cors())
app.use(express.json())


app.get('/' , (req, res) => res.send("Api is working"))

const PORT = process.env.PORT ||  3000 ;


app.listen(PORT, ()=> {
    console.log('sever is runnig on port' + PORT);
    
})

export default app; 