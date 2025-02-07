import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import todoRoutes from "./routes/todoRoutes.js";

const app = express()
const port = 3000

app.use(cors());
app.use(bodyParser.json());


const MONGO_URI = 'mongodb://localhost:27017/todoapp'; // Connection string

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
  
app.use("/api", todoRoutes)

app.listen(port, () => {
    console.log(`Server is running on part ${port}`);
    
})