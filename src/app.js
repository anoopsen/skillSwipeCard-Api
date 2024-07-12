const express = require('express');
const dotenv = require('dotenv');
const cardRoutes = require('./routes/cardRoutes');
const errorHandler  = require('./middleware/errorHandler');
const  notFound  = require('./middleware/notFound');
const connectDB = require('../config/db');
const cors = require('cors');
dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/cards', cardRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
// connectDB().then(()=>{
      
// })
// .catch((err)=>{
//     console.error(err.message);
// })
app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`);
}); 
