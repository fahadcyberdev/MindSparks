import express from 'express'
import 'dotenv/config'
import cors from 'cors'

const app = express();

// middlewares
app.use(cors())
app.use(express.json())

app.get('/' , (req, res) => res.send("Api is working"))

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=> {
    console.log('server is running on port ' + PORT);
})

export default app;