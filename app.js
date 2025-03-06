import express from "express";
import {PORT} from './config/env.js'
const app = express();

app.get('/', (req, res)  => {
  res.send('Hello from Subscription Tracking System');
})

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`)
})

export default app;