import express from "express";
import {PORT} from './config/env.js'

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connecToDatabase from "./database/mongodb.js";

const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

app.get('/', (req, res)  => {
  res.send('Subscription Tracking System');
})

app.listen(PORT, async() => {
  console.log(`server is running on http://localhost:${PORT}`)
  await connecToDatabase();
})

export default app;