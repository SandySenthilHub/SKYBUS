const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const port = process.env.PORT;

const cityRouter = require("./src/controllers/city.controller");
const busRouter = require("./src/controllers/bus.controller");
const userRouter=require("./src/controllers/user.controller");
const orderRouter=require("./src/controllers/order.controller")
const paymentController = require('./src/controllers/payment.controller');

const connect = require("./src/configs/db");

app.use(cors());
app.options('*', cors()); 
app.use(express.json());

app.use("/user",userRouter)
app.use("/city", cityRouter);
app.use("/bus", busRouter);
app.use("/order", orderRouter);

//Razorpay payment
app.use("/api/payment", paymentController);

app.listen(port, async () => {
  try {
    await connect();
    console.log(`listening ${port}`);
  } catch (error) {
    console.log(error.message);
  }
});
