const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('dotenv').config();

//DB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
    });

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
connectDB();

//My routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');
const stripeRoutes = require('./routes/stripepayment');

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//PORT
const port = process.env.PORT || 6000;

//My routes
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', orderRoutes);
app.use('/api', stripeRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
}

//Starting a Server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
