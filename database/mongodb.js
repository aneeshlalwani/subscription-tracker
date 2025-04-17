import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from '../config/env.js'

if (!DB_URI) throw new console.log("Provide mongo DB URI in environment variables...");

const connecToDatabase = async () => { 
  try {
    await mongoose.connect(DB_URI);

    console.log(`Connected to DB under ${NODE_ENV} Mode`)
  } catch (error) {
    console.log("Error connecting database.....")
    process.exit(1);
  }    
}

export default connecToDatabase;