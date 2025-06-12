import express from 'express'
import 'dotenv/config'
import cors from 'cros'

const app = express();



// middlewares

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT ||  3000 ;