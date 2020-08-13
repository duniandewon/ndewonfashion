require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const connectDB = require('./config/database');
const MongoStore = require('connect-mongo')(session);
const PORT = process.env.PORT || 5000;
const path = require('path');

/**
 * ----------------- GENERAL SETUP ------------------------
 */

// Create express application
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
connectDB();
const db = mongoose.connection;

/**
 * ----------------- SESSIONS SETUP ------------------------
 */

const sessionStore = new MongoStore({
  mongooseConnection: db,
  collection: 'sessions',
});

app.use(
  session({
    secret: 'some secret word',
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

/**
 * ----------------- PASSPORT SETUP ------------------------
 */

require('./config/passport');

app.use(passport.initialize());
app.use(passport.session());

/**
 * ----------------- ROUTES ------------------------
 */

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
// app.use('/api/orders', require('./routes/orders'));

// Serve Static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'client', 'build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

/**
 * ----------------- SERVER ------------------------
 */

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
