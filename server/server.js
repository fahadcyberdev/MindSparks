import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';


const app = express();


await connectDB()



// Middlewares
app.use(cors());
app.use(express.json());


// Home test route
app.get('/', (req, res) => {
  res.send('API is Working');
});

app.use('/api/admin', adminRouter)

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});


export default app;