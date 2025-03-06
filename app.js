import express from "express";

const app = express();

app.get('/', (req, res)  => {
  res.send('Hello from Subscription Tracking System');
})

app.listen(3000, () => {
  console.log('server is running on http://localhost:3000')
})

export default app;